import { Inter, Plus_Jakarta_Sans } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
});

const variableConstant = 'variable';
const fontInterVar = inter.variable.replace(variableConstant, 'Inter');
const fontPlusJakartaSansVar = plusJakartaSans.variable.replace(variableConstant, 'Plus_Jakarta_Sans');

export const GlobalFontVariables = () => (
  <style jsx global>{`
    html {
      --font-inter: ${fontInterVar};
      --font-plus-jakarta-sans: ${fontPlusJakartaSansVar};
    }
  `}</style>
);
