import React, { useEffect, useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './slide.css';
import { dataInfo } from '../../../constant/info';

const SliderHome = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    setdata(dataInfo);
  }, []);

  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className='mySwiper'
      >
        {data.map((object, index) => (
          <SwiperSlide className='swiperSlide' key={index}>
            <figure className='container_image'>
              <img src={object.image} alt='' className='image_slide' />
            </figure>
            <h2 className='title_slide'>{object.title}</h2>
            <p className='parrafo_slide'>{object.description}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SliderHome;
