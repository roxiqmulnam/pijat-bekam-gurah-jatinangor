import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <div className="text-white">
      <div className="wrapper-components justify-center text-center h-[80vh] mt-16 lg:mt-32">
        <h1 className="font-bold py-8 my-4 text-4xl md:text-5xl lg:text-7xl">
          Pijat, Bekam & Gurah{' '}
          <span className="text-green-500">Jatinangor</span>
        </h1>
        <p className="font-bold text-gray-500 text-sm md:text-md lg:text-xl">
          Penyedia layanan pijat tradisional yang profesional. Siap melayani
          anda.
        </p>
        <Link
          href="https://wa.me/6285156353140?text=Hello%20saya%20mau%20dipijit?"
          target="_blank"
        >
          <button className="bg-green-500 text-white rounded-lg font-medium w-[30vh] h-[8vh] my-6 mx-auto lg:text-xl">
            Hubungi Kami
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
