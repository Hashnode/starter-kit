import React, { useState, useEffect } from 'react';

type Theme = 'default' | 'dyslexic' | 'high-contrast' | 'color-blind';

const themes: Record<Theme, { name: string, description: string }> = {
  'default': { name: 'Varsayılan', description: 'Standart tema' },
  'dyslexic': { name: 'Disleksi Dostu', description: 'Disleksi için optimize edilmiş yazı tipi ve renk şeması' },
  'high-contrast': { name: 'Yüksek Kontrast', description: 'Görme zorluğu yaşayanlar için yüksek kontrastlı tema' },
  'color-blind': { name: 'Renk Körü Dostu', description: 'Renk körü kullanıcılar için optimize edilmiş renk şeması' },
};

export const ThemeSwitcher: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState<Theme>('default');

  useEffect(() => {
    const savedTheme = localStorage.getItem('blog-theme') as Theme;
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
      applyTheme(savedTheme);
    }
  }, []);

  const applyTheme = (theme: Theme) => {
    document.body.className = `theme-${theme}`;
    localStorage.setItem('blog-theme', theme);
  };

  const changeTheme = (theme: Theme) => {
    setCurrentTheme(theme);
    applyTheme(theme);
  };

  return (
    <div className="theme-switcher">
      <h2>Görünüm Ayarları</h2>
      {Object.entries(themes).map(([key, { name, description }]) => (
        <button
          key={key}
          onClick={() => changeTheme(key as Theme)}
          className={`theme-button ${currentTheme === key ? 'active' : ''}`}
          aria-pressed={currentTheme === key}
        >
          <span className="theme-name">{name}</span>
          <span className="theme-description">{description}</span>
        </button>
      ))}
    </div>
  );
};