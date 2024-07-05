import React, { useState, useEffect, useCallback } from 'react';
import Head from 'next/head';
import { Navbar } from './navbar';
import { Footer } from './footer';
import { Layout } from './layout';
import { Container } from './container';
import { AppProvider } from './contexts/appContext';
import { PublicationFragment } from '../generated/graphql';
import { v4 as uuidv4 } from 'uuid';
import { debounce } from 'lodash';
import { randomBytes, createHmac } from 'crypto';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';

type ContactProps = {
  publication: PublicationFragment;
};

type FormData = {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  honeypot: string;
};

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '6LdMIQEqAAAAAOAzB1FjU8LLNXYTGlFgZWGe80Za';
const CSRF_SECRET = process.env.NEXT_PUBLIC_CSRF_SECRET || 'cd0102b7cb534906f90d7b0298fb159217fb1ea2051331c3c57f70f826b29f350078efe0d7fb76e7e160aa0f1fbad1629f2f2086419b82b8f330e491e2f8c3e4';

const getIpAddress = async (): Promise<string> => {
  try {
    const response = await fetch('/api/get-ip');
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error('Error getting IP address:', error);
    return '';
  }
};

const sanitizeInput = (input: string): string => {
  const element = document.createElement('div');
  element.innerText = input;
  return element.innerHTML
    .replace(/<script.*?>.*?<\/script>/gi, '')
    .replace(/[<>]/g, '')
    .trim();
};

const generateCsrfToken = (): string => {
  const timestamp = Date.now().toString();
  const hash = createHmac('sha256', CSRF_SECRET).update(timestamp).digest('hex'); // Burada createHmac fonksiyonunu kullanıyoruz
  return `${timestamp}.${hash}`;
};

const timingSafeEqual = (a: string, b: string): boolean => {
  if (a.length !== b.length) {
    return false;
  }

  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
};

const validateCsrfToken = (token: string): boolean => {
  const [timestamp, hash] = token.split('.');
  const expectedHash = createHmac('sha256', CSRF_SECRET).update(timestamp).digest('hex'); // Burada createHmac fonksiyonunu kullanıyoruz
  return timingSafeEqual(hash, expectedHash);
};

const ContactForm: React.FC<ContactProps> = ({ publication }) => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '',
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [remainingChars, setRemainingChars] = useState(120);
  const [ipAddress, setIpAddress] = useState('');
  const [sessionId, setSessionId] = useState('');
  const [notification, setNotification] = useState<{ type: string; message: string } | null>(null);
  const [csrfToken, setCsrfToken] = useState('');
  const [lastSubmissionTime, setLastSubmissionTime] = useState(0);

  useEffect(() => {
    const fetchIp = async () => {
      const ip = await getIpAddress();
      setIpAddress(ip);
    };

    const getSessionId = () => {
      let sessionId = localStorage.getItem('sessionId');
      if (!sessionId) {
        sessionId = uuidv4();
        localStorage.setItem('sessionId', sessionId);
      }
      setSessionId(sessionId);
    };

    fetchIp();
    getSessionId();
    setCsrfToken(generateCsrfToken());
  }, []);

  const [isMessageValid, setIsMessageValid] = useState(false);

  const [messageCharCount, setMessageCharCount] = useState(0);

  const countNonWhitespaceChars = (str: string): number => {
    return str.replace(/\s/g, '').length;
  };

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const validateForm = useCallback(debounce((data: FormData) => {
    const newMessageCharCount = countNonWhitespaceChars(data.message);

    const newIsMessageValid = newMessageCharCount >= 120;
    const isFormValid =
      validateName(data.name) &&
      validatePhone(data.phone) &&
      validateEmail(data.email) &&
      data.subject.trim() !== '' &&
      newIsMessageValid;

    setIsButtonDisabled(!isFormValid);
    setMessageCharCount(newMessageCharCount);
    setIsMessageValid(newIsMessageValid);
  }, 300), []);

  useEffect(() => {
    validateForm(formData);
  }, [formData, validateForm]);

  const sanitizeInput = (input: string): string => {
    // Sadece temel HTML özel karakterlerini kaldır, diğerlerini olduğu gibi bırak
    return input.replace(/[<>&]/g, '');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    let sanitizedValue = sanitizeInput(value);

    if (name === 'phone' || name === 'email') {
      sanitizedValue = sanitizedValue.replace(/\s/g, ''); // Remove spaces
    }

    setFormData(prevState => ({ ...prevState, [name]: sanitizedValue }));
  };

const validateName = (name: string): boolean => {
  const nameParts = name.split(/\s+/).filter(Boolean); // Split and filter out extra spaces
  const trimmedName = nameParts.join(' '); // Join back with a single space
  return /^[a-zA-ZığüşöçİĞÜŞÖÇ\s]+$/.test(trimmedName) && nameParts.length >= 2 && nameParts.length <= 3;
};

  const validatePhone = (phone: string): boolean => {
    return /^[0-9]{10,15}$/.test(phone);
  };

  const validateEmail = (email: string): boolean => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.honeypot) {
      console.log('Potential bot detected');
      setNotification({ type: 'error', message: 'Form submission failed.' });
      return;
    }

    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available');
      return;
    }

    const recaptchaToken = await executeRecaptcha('contactFormSubmit');

    if (!validateCsrfToken(csrfToken)) {
      setNotification({ type: 'error', message: 'Invalid session. Please refresh the page and try again.' });
      return;
    }

    const currentTime = Date.now();
    if (currentTime - lastSubmissionTime < 60000) {
      setNotification({ type: 'error', message: 'Please wait before submitting again.' });
      return;
    }

    const konuIdMapping: { [key: string]: number } = {
      'öneri': 4,
      'şikayet': 3,
      'diğer': 6,
    };

    const konuId = konuIdMapping[formData.subject] || 6;

    const nameParts = formData.name.trim().split(/\s+/);
    const firstName = nameParts.slice(0, -1).join(' ');
    const lastName = nameParts[nameParts.length - 1];

    const postData = {
      uygulamaId: 1,
      uygulamaDilId: 1,
      kayitDilId: 1,
      oturumId: sessionId,
      ipAdres: ipAddress,
      ad: firstName,
      soyad: lastName,
      telefon: formData.phone,
      eMail: formData.email,
      mesaj: formData.message,
      konuId: konuId,
      konuBaslik: formData.subject,
      test: false,
      recaptchaToken,
    };

    try {
      const response = await fetch('https://api.temizmama.com/v1/BlogKaydet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken,
        },
        body: JSON.stringify(postData),
      });
    
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
      }
    
      const data = await response.json();
      console.log('Form submitted successfully:', data);

      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
        honeypot: '',
      });

      setNotification({ type: 'success', message: 'Form başarıyla gönderildi!' });
      setLastSubmissionTime(currentTime);
      setCsrfToken(generateCsrfToken());
      setIsFormSubmitted(true);
      
      // Reset the form submission state after 5 seconds
      setTimeout(() => {
        setIsFormSubmitted(false);
        setMessageCharCount(0);
      }, 5000);
    } catch (error) {
      console.error('Fetch error:', error);
      setNotification({ type: 'error', message: 'Form gönderimi başarısız oldu.  Lütfen tekrar deneyin.' });
    }

    setTimeout(() => setNotification(null), 5000);
  };

  return (
    <AppProvider publication={publication}>
      <Layout>
        <Head>
          <title>Bizimle iletişime geçin! | Temizmama Blog</title>
          <meta name="description" content="Bizimle iletişime geçin. Temizmama Blog'da size yardımcı olmaktan memnuniyet duyarız!" />
          <link href="https://blog.temizmama.com/iletisim" />  
          <meta name="theme-color" content="#efdcc9" />
          <meta name="msapplication-navbutton-color" content="#efdcc9" />
          <meta name="apple-mobile-web-app-status-bar-style" content="#efdcc9" />

          {/* Open Graph Meta Tags */}
          <meta property="og:title" content="Bizimle iletişime geçin! | Temizmama Blog" />
          <meta property="og:site_name" content="Temizmama Blog" />
          <meta property="og:locale" content="tr_TR" />
          <meta property="og:type" content="website" />  
          <meta property="og:image" content="https://blog.temizmama.com/assets/blog/preview/contact.webp" />
          <meta property="og:image:alt" content="İletişim Sayfası Görseli" />
          <meta property="og:url" content="https://blog.temizmama.com/iletisim" />
          <meta property="og:description" content="Bizimle iletişime geçin. Temizmama Blog'da size yardımcı olmaktan memnuniyet duyarız!" />
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@temizmamacom" />
          <meta name="twitter:title" content="Bizimle iletişime geçin! | Temizmama Blog" />
          <meta name="twitter:description" content="Bizimle iletişime geçin. Temizmama Blog'da size yardımcı olmaktan memnuniyet duyarız!" />
          <meta name="twitter:image" content="https://blog.temizmama.com/assets/blog/preview/contact.webp" />
          <meta name="twitter:image:alt" content="İletişim Sayfası Görseli" />

          {/* Ek Meta Etiketleri */}
          <meta name="robots" content="index, follow" />
          <meta name="googlebot" content="index, follow" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="format-detection" content="telephone=no" />
        </Head>
        <Navbar />

        <Container className="flex flex-col items-stretch gap-10 px-5 pb-10 select-none">
          <div className="text-center">
            <h1 className="text-5xl text-gray-900 font-semibold mt-2 mb-5">
              Temizmama Blog İletişim
            </h1>
            <p className="text-md leading-snug text-slate-500 dark:text-neutral-400 text-lg max-w-xl mx-auto">
            Bizimle iletişime geçin. Temizmama Blog'da size yardımcı olmaktan memnuniyet duyarız!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto w-full relative">
            <input type="hidden" name="csrf_token" value={csrfToken} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" content="noindex" className="block mb-2 text-sm font-medium text-gray-900">Ad Soyad*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-22 ${validateName(formData.name) ? 'focus:ring-orng-500' : 'focus:ring-red-500'}`}
                  pattern="[a-zA-ZığüşöçİĞÜŞÖÇ\s]*"
                  title="Sadece harfler ve boşluklar kullanılabilir."
                />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900" content="noindex">Cep Telefon*</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-22 ${validatePhone(formData.phone) ? 'focus:ring-orng-500' : 'focus:ring-red-500'}`}
                  pattern="[0-9]{10,15}"
                  title="Sadece 10-15 arasında rakamlar kullanılabilir."
                  onKeyPress={(e) => {
                    if (!/^[0-9]*$/.test(e.key)) {
                      e.preventDefault();
                    }
                  }}
                />
              </div>
              <div className="col-span-2">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900" content="noindex">E-posta*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-22 ${validateEmail(formData.email) ? 'focus:ring-orng-500' : 'focus:ring-red-500'}`}
                  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                  title="Sadece geçerli bir e-posta adresi kullanılabilir."
                />
              </div>
              <div className="col-span-2">
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900" content="noindex">İletişimin Konusu*</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-22 focus:ring-orng-500"
                >
                  <option value="" className="hover:bg-orng-600" content="noindex">Seçiniz</option>
                  <option value="öneri" className="hover:bg-orng-600" content="noindex">Görüş ve Öneri</option>
                  <option value="şikayet" className="hover:bg-orng-600" content="noindex">Şikayet</option>
                  <option value="diğer" className="hover:bg-orng-600" content="noindex">Diğer</option>
                </select>
              </div>
              <div className="col-span-2 relative">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900" content="noindex">Mesajınız*</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  placeholder="Mesajınızı buraya yazın"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-22 focus:ring-orng-500"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault(); // Normal enter tuşunu engelle
                    }
                  }}
                ></textarea>
                <p className="text-sm text-gray-400 mt-1">
                  {messageCharCount >= 120 && !isFormSubmitted
                    ? "Formu göndererek benimle iletişime geçilmesine izin verdiğimi ve bilgilerimin gerek görüldüğü gibi işleneceğine izin verdiğimi beyan ederim."
                    : `Mesajınızın minimum 120 karakter olması gerekmektedir. ${Math.max(0, 120 - messageCharCount)} karakter kaldı.`}
                </p>
              </div>
            </div>

            {/* Honeypot field */}
            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleInputChange}
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="mt-6">
              <button 
                type="submit" 
                className={`w-full px-4 py-2 text-white bg-orng-500 rounded-md hover:bg-orng-600 focus:outline-none focus:ring-22 focus:ring-orng-500 focus:ring-offset-2 ${isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={isButtonDisabled || !isMessageValid}
              >
                {isButtonDisabled 
                  ? 'Formu eksiksiz doldurunuz.' 
                  : isFormSubmitted
                    ? 'Gönderildi!'
                    : <span className="flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 mr-2"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Gönder</span>
                }
              </button>
            </div>
          </form>

          {notification && (
            <div className={`fixed bottom-4 right-4 px-4 py-2 rounded shadow-md text-white ${notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
              {notification.message}
            </div>
          )}
        </Container>
        <Footer />
      </Layout>
    </AppProvider>
  );
};

const Contact: React.FC<ContactProps> = ({ publication }) => (
  <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_SITE_KEY}>
    <ContactForm publication={publication} />
  </GoogleReCaptchaProvider>
);

export default Contact;
