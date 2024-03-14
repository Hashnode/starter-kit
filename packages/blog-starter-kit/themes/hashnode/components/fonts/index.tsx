import { Pacifico, Outfit } from 'next/font/google';

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-pacifico',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Specify the weights you want to use for Outfit
  variable: '--font-outfit',
  display: 'swap',
});

const fontPacificoVar = pacifico.variable.replace('variable', 'Pacifico');
const fontOutfitVar = outfit.variable.replace('variable', 'Outfit');

export const GlobalFontVariables = () => (
  <style jsx global>{`
    html {
      --font-pacifico: ${fontPacificoVar};
      --font-outfit: ${fontOutfitVar};
    }
  `}</style>
);
