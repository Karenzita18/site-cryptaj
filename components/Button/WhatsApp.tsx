import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsApp = () => {
  return (
    <a
      className="fixed md:h-16 md:w-16 w-12 h-12 animate-pulse bg-whatsapp bottom-16 right-5 md:bottom-10 md:right-10 z-50 rounded-full flex place-content-center place-items-center"
      href="https://api.whatsapp.com/send?phone=5519997507474&text=Ol%C3%A1,%20vim%20atrav%C3%A9s%20do%20site."
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="sr-only">Ir para WhatsApp</span>
      <FaWhatsapp className="text-3xl md:text-4xl text-white" />
    </a>
  );
};

export default WhatsApp;
