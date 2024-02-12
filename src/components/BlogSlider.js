import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Scrollbar } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

function BlogSlider({data}) {


    return (
        <Swiper
      // install Swiper modules
      modules={[Navigation,   Scrollbar ]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }} 
    >
        {
            data && data.map(({img}, idx)=>(
                <SwiperSlide><img src={img} /></SwiperSlide> 
            ))
        }
      
      ...
    </Swiper>
    )
}

export default BlogSlider
