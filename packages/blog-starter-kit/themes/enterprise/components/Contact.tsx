import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Navbar } from './navbar';
import { Footer } from './footer';
import { Layout } from './layout';
import { Container } from './container';
import { AppProvider } from './contexts/appContext';
import { PublicationFragment } from '../generated/graphql';

type ContactProps = {
  publication: PublicationFragment;
};

const getIpAddress = async () => {
  try {
    const response = await fetch('/api/get-ip');
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error('IP adresi alınırken hata oluştu:', error);
    return '';
  }
};

export const Contact: React.FC<ContactProps> = ({ publication }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [remainingChars, setRemainingChars] = useState(120);
  const [ipAddress, setIpAddress] = useState('');

  useEffect(() => {
    const fetchIp = async () => {
      const ip = await getIpAddress();
      setIpAddress(ip);
    };

    fetchIp();
  }, []);

  useEffect(() => {
    const messageLength = formData.message.length;
    const charsNeeded = 120 - messageLength;
    setRemainingChars(charsNeeded);

    const isFormValid =
      formData.name.trim() !== '' &&
      formData.phone.trim() !== '' &&
      formData.email.trim() !== '' &&
      formData.subject.trim() !== '' &&
      messageLength >= 120;

    setIsButtonDisabled(!isFormValid);
  }, [formData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const konuIdMapping: { [key: string]: number } = {
      'öneri': 35,
      'şikayet': 36,
      'diğer': 38,
    };

    const konuId = konuIdMapping[formData.subject];

    const [firstName, ...lastName] = formData.name.split(' ');

    const postData = {
      uygulamaId: 1,
      uygulamaDilId: 1,
      kayitDilId: 1,
      oturumId: "3dbd7db1-7ef4-4a5f-a023-f9c147c55ee7",
      ipAdres: ipAddress,
      ad: firstName,
      soyad: lastName.join(' '),
      telefon: formData.phone,
      eMail: formData.email,
      mesaj: formData.message,
      konuId: konuId,
      konuBaslik: formData.subject,
      test: false,
    };

    try {
      const response = await fetch('https://api.temizmama.com/v1/BlogKaydet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        throw new Error('Form gönderilirken hata oluştu.');
      }

      // Formu temizle
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Form gönderilirken hata oluştu:', error);
    }
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
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Telefon*</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="Telefon Numaranız"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            <div className="mt-6">
              <button 
                type="submit" 
                className={`w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={isButtonDisabled}
              >
                Gönder
              </button>
            </div>
          </form>
        </Container>
        <Footer />
      </Layout>
    </AppProvider>
  );
};

export default Contact;
