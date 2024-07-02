import React from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { wsp } from '../assets'; // Asegúrate de que la ruta de la imagen de WhatsApp sea correcta.

const sections = [
  'hero', 'nosotros', 'info', 'premisas', 'management', 'features', 'lineas', 'negocios', 'entretenimiento', 'frase', 'alianzass', 'contacto'
];

const NavigationButton = () => {
  const handleNavigation = () => {
    const currentScrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    let nextSection = null;

    for (let i = 0; i < sections.length; i++) {
      const element = document.getElementById(sections[i]);
      if (element) {
        const elementTop = element.getBoundingClientRect().top + window.scrollY;
        if (elementTop > currentScrollPosition + windowHeight / 2) {
          nextSection = element;
          break;
        }
      }
    }

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Si no se encuentra la siguiente sección, volver a la primera sección (hero)
      const firstSection = document.getElementById(sections[0]);
      if (firstSection) {
        firstSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="fixed z-50 right-0 bottom-0 flex flex-col items-center m-4 space-y-2">
      <button
        onClick={handleNavigation}
        className="p-5 bg-white rounded-full text-gray-400 opacity-50 cursor-pointer flex items-center justify-center"
      >
        <BsChevronDown size={20} />
      </button>
      <a
        href="https://wa.me/541170985000" // Reemplaza con tu número de teléfono en formato internacional.
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 bg-green-500 rounded-full text-white cursor-pointer flex items-center justify-center"
      >
        <img src={wsp} alt="WhatsApp" className="w-8 h-8" />
      </a>
    </div>
  );
};

export default NavigationButton;
