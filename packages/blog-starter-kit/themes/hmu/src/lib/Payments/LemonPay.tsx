"use client";

// Import necessary modules and types
import Script from "next/script";
import { useEffect } from "react";

// Extend the Window interface to declare the function
interface CustomWindow extends Window {
  createLemonSqueezy?: () => void;
}

// Define the LemonPay component with TypeScript
const LemonPay: React.FC = () => {
  useEffect(() => {
    // Assuming that `createLemonSqueezy` is a function available on the window object
    (window as CustomWindow).createLemonSqueezy?.();
  }, []);

  return (
    <Script
      id="lemonPay"
      strategy="beforeInteractive"
      src="https://app.lemonsqueezy.com/js/lemon.js"
    />
  );
};

export default LemonPay;
