import React from 'react';
// Import Swiper React components
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';

import Layout from '@/components/layouts/Layout';

export default function App() {
  return (
    <Layout>
      <Swiper
        className="flex items-center justify-center h-[50vh]"
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 25000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <Image
            src="/../public/images/img1.jpg"
            width={500}
            height={100}
            alt="img1"
          />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <Image
            src="/../public/images/img1.jpg"
            width={500}
            height={100}
            alt="img1"
          />
        </SwiperSlide>
      </Swiper>
    </Layout>
  );
}
