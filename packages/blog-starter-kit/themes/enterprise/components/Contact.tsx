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

export const Contact: React.FC<ContactProps> = ({ publication }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    country: '',
    city: '',
    message: '',
  });

  const [countries, setCountries] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const [showCitySelect, setShowCitySelect] = useState(false);

  useEffect(() => {
    // Ülkeleri yükle
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        const sortedCountries = data
          .map((country: any) => country.name.common)
          .sort((a: string, b: string) => a.localeCompare(b));
        
        // Türkiye'yi listenin başına ekle
        const turkeyIndex = sortedCountries.findIndex((country: string) => country === 'Turkey');
        if (turkeyIndex !== -1) {
          sortedCountries.splice(turkeyIndex, 1);
          sortedCountries.unshift('Türkiye');
        }

        setCountries(['Seçiniz', 'Belirtmek istemiyorum', ...sortedCountries]);
      })
      .catch(error => console.error('Ülkeler yüklenirken hata oluştu:', error));
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));

    if (name === 'country') {
      if (value !== 'Seçiniz' && value !== 'Belirtmek istemiyorum') {
        setShowCitySelect(true);
        // Ülke seçildiğinde şehirleri yükle (örnek olarak)
        setCities([
          'Seçiniz', 'İzmir', 'İstanbul', 'Ankara', 'Adana', 'Adıyaman', 'Afyonkarahisar', 'Ağrı', 'Amasya', 'Antalya', 
          'Artvin', 'Aydın', 'Balıkesir', 'Bilecik', 'Bingöl', 'Bitlis', 'Bolu', 'Burdur', 'Bursa', 'Çanakkale', 
          'Çankırı', 'Çorum', 'Denizli', 'Diyarbakır', 'Edirne', 'Elazığ', 'Erzincan', 'Erzurum', 'Eskişehir', 'Gaziantep', 
          'Giresun', 'Gümüşhane', 'Hakkari', 'Hatay', 'Isparta', 'Mersin', 'Kars', 'Kastamonu', 'Kayseri', 'Kırklareli', 
          'Kırşehir', 'Kocaeli', 'Konya', 'Kütahya', 'Malatya', 'Manisa', 'Kahramanmaraş', 'Mardin', 'Muğla', 'Muş', 
          'Nevşehir', 'Niğde', 'Ordu', 'Rize', 'Sakarya', 'Samsun', 'Siirt', 'Sinop', 'Sivas', 'Tekirdağ', 
          'Tokat', 'Trabzon', 'Tunceli', 'Şanlıurfa', 'Uşak', 'Van', 'Yozgat', 'Zonguldak', 'Aksaray', 'Bayburt', 
          'Karaman', 'Kırıkkale', 'Batman', 'Şırnak', 'Bartın', 'Ardahan', 'Iğdır', 'Yalova', 'Karabük', 'Kilis', 
          'Osmaniye', 'Düzce'
        ]);
      } else {
        setShowCitySelect(false);
        setFormData(prevState => ({ ...prevState, city: '' }));
      }
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form gönderme işlemi burada yapılacak
    console.log(formData);
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

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto w-full">
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
              <div>
                <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-900">Ülke</label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {countries.map(country => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
              </div>
              {showCitySelect && (
                <div>
                  <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900">Şehir</label>
                  <select
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {cities.map(city => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>
              )}
            </div>
            <div className="mt-6">
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
            <div className="mt-6">
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
            </div>
            <div className="mt-6">
              <button type="submit" className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
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
