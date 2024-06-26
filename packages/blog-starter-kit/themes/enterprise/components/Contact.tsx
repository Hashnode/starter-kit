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
import ReCAPTCHA from "react-google-recaptcha";
import cryptly from 'cryptly';

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
const CSRF_SECRET = process.env.CSRF_SECRET || 'YOUR_CSRF_SECRET';

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
  const hash = cryptly.hash(`${timestamp}${CSRF_SECRET}`, 'sha256');
  return `${timestamp}.${hash}`;
};

const validateCsrfToken = (token: string): boolean => {
  const [timestamp, hash] = token.split('.');
  const expectedHash = cryptly.hash(`${timestamp}${CSRF_SECRET}`, 'sha256');
  return cryptly.timingSafeEqual(hash, expectedHash);
};

const Contact: React.FC<ContactProps> = ({ publication }) => {
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
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
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

  const validateForm = useCallback(debounce((data: FormData) => {
    const isFormValid =
      validateName(data.name) &&
      validatePhone(data.phone) &&
      validateEmail(data.email) &&
      data.subject.trim() !== '' &&
      data.message.length >= 120;

    setIsButtonDisabled(!isFormValid);
    setRemainingChars(Math.max(0, 120 - data.message.length));
  }, 300), []);

  useEffect(() => {
    validateForm(formData);
  }, [formData, validateForm]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    let sanitizedValue = sanitizeInput(value);
    
    if (name === 'name') {
      sanitizedValue = sanitizedValue.replace(/[^a-zA-ZığüşöçİĞÜŞÖÇ\s]/g, '');
    }

    setFormData(prevState => ({ ...prevState, [name]: sanitizedValue }));
  };

  const validateName = (name: string): boolean => {
    const nameParts = name.trim().split(/\s+/);
    return /^[a-zA-ZığüşöçİĞÜŞÖÇ\s]+$/.test(name) && nameParts.length >= 2 && nameParts.length <= 3;
  };

  const validatePhone = (phone: string): boolean => {
    return /^[0-9]{10,15}$/.test(phone);
  };

  const validateEmail = (email: string): boolean => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  };

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check honeypot field
    if (formData.honeypot) {
      console.log('Potential bot detected');
      setNotification({ type: 'error', message: 'Form submission failed.' });
      return;
    }

    // Check reCAPTCHA
    if (!recaptchaToken) {
      setNotification({ type: 'error', message: 'Please complete the reCAPTCHA.' });
      return;
    }

    // Validate CSRF token
    if (!validateCsrfToken(csrfToken)) {
      setNotification({ type: 'error', message: 'Invalid session. Please refresh the page and try again.' });
      return;
    }

    // Implement rate limiting
    const currentTime = Date.now();
    if (currentTime - lastSubmissionTime < 60000) { // 1 minute cooldown
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
        throw new Error(`Form submission error: ${response.status} ${response.statusText} - ${errorText}`);
      }

      console.log('Form submitted successfully:', postData);

      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
        honeypot: '',
      });

      setNotification({ type: 'success', message: 'Form submitted successfully!' });
      setLastSubmissionTime(currentTime);
      setCsrfToken(generateCsrfToken()); // Generate new CSRF token after successful submission
    } catch (error) {
      console.error('Form submission error:', error);
      setNotification({ type: 'error', message: 'Form submission failed. Please try again.' });
    }

    setTimeout(() => setNotification(null), 5000);
  };

  return (
    <AppProvider publication={publication}>
      <Layout>
        <Head>
          <title>İletişim - {publication?.title || "Temizmama Blog"}</title>
          <meta name="description" content="Bizimle iletişime geçin" />
        </Head>
        <Navbar />

        <Container className="flex flex-col items-stretch gap-10 px-5 pb-10 select-none">
          <div className="text-center">
            <h1 className="text-5xl text-gray-900 font-semibold mt-2 mb-5">
              İletişim
            </h1>
            <p className="text-md leading-snug text-slate-500 dark:text-neutral-400 text-lg max-w-xl mx-auto">
              Bizimle iletişime geçmek için aşağıdaki formu doldurun.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto w-full relative">
            <input type="hidden" name="csrf_token" value={csrfToken} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Ad Soyad*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Adınız ve Soyadınız"
                  className={`w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 ${validateName(formData.name) ? 'focus:ring-blue-500' : 'focus:ring-red-500'}`}
                  pattern="[a-zA-ZığüşöçİĞÜŞÖÇ\s]*"
                  title="Sadece harfler ve boşluklar kullanılabilir."
                />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Cep Telefon*</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="Cep Telefon Numaranız"
                  className={`w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 ${validatePhone(formData.phone) ? 'focus:ring-blue-500' : 'focus:ring-red-500'}`}
                  pattern="[0-9]{10,15}"
                  title="Sadece 10-15 arasında rakamlar kullanılabilir."
                />
              </div>
              <div className="col-span-2">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">E-posta*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="E-posta Adresiniz"
                  className={`w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 ${validateEmail(formData.email) ? 'focus:ring-blue-500' : 'focus:ring-red-500'}`}
                />
              </div>
              <div className="col-span-2">
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">İletişimin Konusu*</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Seçiniz</option>
                  <option value="öneri">Görüş ve Öneri</option>
                  <option value="şikayet">Şikayet</option>
                  <option value="diğer">Diğer</option>
                </select>
              </div>
              <div className="col-span-2 relative">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Mesajınız*</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  placeholder="Mesajınızı buraya yazın"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <div className="absolute right-2 top-0 text-sm text-red-500">
                  {remainingChars > 0 && `${remainingChars} karakter daha yazınız`}
                </div>
                <p className="text-sm text-gray-400 mt-1">
                  Mesajınızın minimum 120 karakter olması gerekmektedir.
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

            {/* ReCAPTCHA */}
            <div className="mt-6">
              <ReCAPTCHA
                sitekey={RECAPTCHA_SITE_KEY}
                onChange={handleRecaptchaChange}
              />
            </div>

            <div className="mt-6">
              <button 
                type="submit" 
                className={`w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${isButtonDisabled || !recaptchaToken ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={isButtonDisabled || !recaptchaToken}
              >
                {isButtonDisabled || !recaptchaToken ? 'Gönder' : <span className="flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 mr-2"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Gönder</span>}
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
  
  export default Contact;