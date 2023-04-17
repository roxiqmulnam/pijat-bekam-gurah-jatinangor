import React from 'react';
import {
  IoLocationOutline,
  IoMailOutline,
  IoLogoFacebook,
  IoLogoInstagram,
} from 'react-icons/io5';
import { BsTelephone } from 'react-icons/bs';

const Footer = () => {
  return (
    <>
      <div className="text-gray-300 border-t wrapper-components mx-auto mt-14 py-10 flex flex-col md:flex-row">
        <div className="w-full lg:w-[75%] mr-10">
          <h1 className="font-bold text-lg md:text-xl lg:text-2xl pb-3">
            Pijat Bekam Gurah <span className="text-green-500">Jatinangor</span>
            .
          </h1>
          <p className="text-base">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
            ullam iste repellat consequatur libero reiciendis, blanditiis
            accusantium.
          </p>
          <div className="flex gap-5 md:w-[75%] my-10">
            <IoLogoFacebook size={30} />
            <IoLogoInstagram size={30} />
          </div>
        </div>

        {/* <div className="flex flex-col lg:flex-row"> */}
        {/* <iframe
            title="Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6661.307800076118!2d107.77846454729368!3d-6.910047359569007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68dbae9c7fc113%3A0xa0c3405a1ad3416f!2sPIJAT%20BEKAM%20GURAH%20JATINAGOR!5e0!3m2!1sid!2sid!4v1679668847014!5m2!1sid!2sid"
            allowFullScreen=""
            loading="lazy"
            className="mr-5 mb-5 md:h-[250px]"
          ></iframe> */}

        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-xl lg:text-2xl pb-3">Kontak kami</h1>
          <div className="flex items-center gap-3">
            <IoLocationOutline className="w-[90px] h-[90px] pb-9 md:pb-5 md:w-[70px] md:h-[50px] lg:pb-3 lg:w-[45px] lg:[40px]" />
            <p>
              RT.03/RW.09, Dusun cahyasari, Cileles, Kec. Jatinangor, Kabupaten
              Sumedang, Jawa Barat 45363
            </p>
          </div>
          <div className="flex items-center gap-3">
            <IoMailOutline size={30} />
            <p>contact@gmail.com</p>
          </div>
          <div className="flex items-start gap-3">
            <BsTelephone size={30} />
            <p>+628123456789</p>
          </div>
        </div>
        {/* </div> */}
      </div>
      <p className="text-center text-white mb-5">
        Created by{' '}
        <a href="https://github.com/numanzamaludin" target="_blank">
          Numan
        </a>
        . | &copy; 2023.
      </p>
    </>
  );
};

export default Footer;
