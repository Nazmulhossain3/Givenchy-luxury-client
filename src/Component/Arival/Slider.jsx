import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import slider1 from '../../assets/sliderPic/slider1.avif'
import slider2 from '../../assets/sliderPic/slider2.avif'
import slider3 from '../../assets/sliderPic/slider3.avif'
import slider4 from '../../assets/sliderPic/slider4.avif'

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
    return (
        <div className="container">
        <h1 className="heading text-3.5xl py-4 text-center">Explore looks</h1>
        <div className="swiper_container py-2">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className='lg:w-[600px] lg:h-[500px] '
          >
            <SwiperSlide className="swiper-slide mx-2 ">
              <img src={slider1} alt="slider1" className="w-[500px] rounded-2xl object-cover" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide mx-2">
              <img src={slider2} alt="slider2" className="w-[500px] rounded-2xl object-cover" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide mx-2 ">
              <img src={slider3} alt="slider3" className=" w-[500px] rounded-2xl object-cover" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide mx-2">
              <img src={slider4} alt="slider4" className="w-[500px] rounded-2xl object-cover" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="slider-controler flex items-center justify-center relative -bottom-8">
          <div className="swiper-button-prev slider-arrow w-14 h-14 bg-white rounded-full shadow-md transform -translate-x-42">
            <ion-icon name="arrow-back-outline" className="text-2xl text-gray-800"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow w-14 h-14 bg-white rounded-full shadow-md transform -translate-x-42">
            <ion-icon name="arrow-forward-outline" className="text-2xl text-gray-800"></ion-icon>
          </div>
          <div className="swiper-pagination w-56 -bottom-2">
            <div className="swiper-pagination-bullet w-6 h-6 rounded-full shadow-md"></div>
            <div className="swiper-pagination-bullet w-6 h-6 rounded-full shadow-md"></div>
            <div className="swiper-pagination-bullet w-6 h-6 rounded-full shadow-md"></div>
            <div className="swiper-pagination-bullet w-6 h-6 rounded-full shadow-md"></div>
          </div>
        </div>
      </div>
      
      
    );
};

export default Slider;