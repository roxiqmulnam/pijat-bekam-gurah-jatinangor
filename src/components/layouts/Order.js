import React from 'react';
import {AiOutlineDown} from "react-icons/ai"

const Order = () => {
  return (
    <div className="w-full my-20 text-white">
      <div className="wrapper-components">
        <h1 className="font-extrabold text-4xl text-center">Bagaimana cara order?</h1>

        <div className="flex flex-col items-center gap-5 my-10 lg:flex-row">
          <div className="w-full rounded-lg flex flex-col">
            <h2 className="text-2xl font-bold text-center py-4">
              Hubungi kami
            </h2>
            <p className="text-center text-lg">
              Hubungi kami melalui telp atau whatsapp.
            </p>
          </div>
          <AiOutlineDown className='w-[30vh] h-[15vh] mt-5 lg:-rotate-90' />

          <div className="w-full rounded-lg flex flex-col">
            <h2 className="text-2xl font-bold text-center py-4">
              Tentukan jadwal
            </h2>
            <p className="text-center text-lg">
              Tentukan jadwal dan layanan yang anda butuhkan.
            </p>
          </div>
          <AiOutlineDown className='w-[30vh] h-[15vh] mt-5 lg:-rotate-90' />

          <div className="w-full rounded-lg flex flex-col">
            <h2 className="text-2xl font-bold text-center py-4">Nikmati</h2>
            <p className="text-center text-lg">
              Pelayanan home service yang sangat memuaskan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
