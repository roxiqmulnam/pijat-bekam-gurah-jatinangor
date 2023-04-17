import React from 'react';
import Link from 'next/link';
const Services = () => {
  return (
    <div className="w-full py-20 text-white bg-slate-800">
      <h1 className="text-center font-bold py-8 text-xl md:text-2xl lg:text-4xl ">
        Menu kami
      </h1>
      <div className="wrapper-components grid md:grid-cols-3 gap-8">
        <div className="w-full border-t-4 border-t-green-500 shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <h2 className="text-2xl font-bold text-center py-8">PIJAT</h2>
          <p className="text-center text-4xl font-bold">Rp.150.000,-</p>
          <div className="text-center font-medium">
            <p className="py-2 mx-8 mt-8">Pijat selama 90 menit</p>
          </div>
          <Link
            href="https://wa.me/6285156353140?text=Hello%20saya%20mau%20dipijit?"
            target="_blank"
            className="mx-auto"
          >
            <button className="bg-green-500 text-white rounded-lg font-medium text-lg w-48 h-12 my-6 mx-auto">
              Hubungi Kami
            </button>
          </Link>{' '}
        </div>
        <div className="w-full border-t-4 border-t-green-500 shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <h2 className="text-2xl font-bold text-center py-8">BEKAM</h2>
          <p className="text-center text-4xl font-bold">Rp.150.000,-</p>
          <div className="text-center font-medium">
            <p className="py-2 mx-8 mt-8">Bekam selama 60 menit</p>
          </div>
          <Link
            href="https://wa.me/6285156353140?text=Hello%20saya%20mau%20dipijit?"
            target="_blank"
            className="mx-auto"
          >
            <button className="bg-green-500 text-white rounded-lg font-medium text-lg w-48 h-12 my-6 mx-auto">
              Hubungi Kami
            </button>
          </Link>{' '}
        </div>
        <div className="w-full border-t-4 border-t-green-500 shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <h2 className="text-2xl font-bold text-center py-8">GURAH</h2>
          <p className="text-center text-4xl font-bold">Rp.150.000,-</p>
          <div className="text-center font-medium">
            <p className="py-2 mx-8 mt-8">Gurah selama 30 menit</p>
          </div>
          <Link
            href="https://wa.me/6285156353140?text=Hello%20saya%20mau%20dipijit?"
            target="_blank"
            className="mx-auto"
          >
            <button className="bg-green-500 text-white rounded-lg font-medium text-lg w-48 h-12 my-6 mx-auto">
              Hubungi Kami
            </button>
          </Link>{' '}
        </div>
      </div>
    </div>
  );
};

export default Services;
