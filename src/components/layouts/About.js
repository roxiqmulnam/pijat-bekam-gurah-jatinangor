import React from 'react';

const About = () => {
  return (
    <div className=" py-28 text-white bg-slate-800">
      <div id="about" className="wrapper-components">
        <h1 className="text-green-500 text-center font-bold text-lg md:text-xl lg:text-xl">
          Pijat Tradisional
        </h1>
        <h1 className="font-bold text-center py-2 text-xl md:text-2xl lg:text-4xl">
          Apa yang membuat layanan pijat disini berbeda?
        </h1>
        <p className="text-slate-400 text-center text-sm md:text-base lg:text-lg">
          Kami memberikan pelayanan terbaik dengan tukang pijat yang
          profesional. Salah satu layanan pijat terpercaya di Jatinangor.
        </p>
        <div className="flex flex-col gap-20 my-4 lg:flex-row lg:my-10">
          <div className="w-full border-r-4 border-r-green-500 shadow-xl rounded-lg px-2 py-3 hover:scale-[1.02] duration-75">
            <h2 className="text-3xl font-bold text-center py-4">
              Berpengalaman
            </h2>
            <p className="text-center text-lg">
              Tukang pijat yang telah berpengalaman dan profesional.
            </p>
          </div>
          <div className="w-full border-b-4 border-b-green-500 shadow-xl rounded-lg px-2 py-3 hover:scale-[1.02] duration-75">
            <h2 className="text-3xl font-bold text-center py-4">
              Biaya terjangkau
            </h2>
            <p className="text-center text-lg">
              Biaya tetap terjangkau dan mendapatkan layanan yang berkualitas.
            </p>
          </div>
          <div className="w-full border-l-4 border-l-green-500 shadow-xl rounded-lg px-2 py-3 hover:scale-[1.02] duration-75">
            <h2 className="text-3xl font-bold text-center py-4">Privasi</h2>
            <p className="text-center text-lg">
              Kami melindungi seluruh privasi anda.
            </p>
          </div>
        </div>
        <h1 className="mt-10 text-3xl font-bold">Layanan Kami</h1>
        <div className="flex flex-col">
          <div className="w-full">
            <p className="text-lg text-justify mt-4 text-slate-400">
              Pemijatan atau body massage ini umumnya memakai minyak esensial
              yang berguna untuk mencegah terjadinya iritasi tubuh. Selain itu,
              aroma minyaknya juga dapat menenangkan pikiran.
            </p>
          </div>
          <ul className="list-decimal list-inside leading-8 tracking-wide font-bold text-xl my-2">
            <li>Pijat Tradisional</li>
            <li>Aneka macam Bekam</li>
            <li>Gurah</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
