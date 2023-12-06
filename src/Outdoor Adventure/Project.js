import React from 'react'
import Menubar from './Menubar'
import './projecstyle.css'
import Line1 from './Line1'
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import imag from './ImagesProjects/water-sports-03.jpg'
import imag1 from './ImagesProjects/water-sports-04.jpg'
import imag2 from './ImagesProjects/water-sports-02.jpg'
import imag3 from './ImagesProjects/water-sports-01.jpg'
import imag4 from './ImagesProjects/winter-sports-01.jpg'
import imag5 from './ImagesProjects/winter-sports-02.jpg'
import imag6 from './ImagesProjects/winter-sports-03.jpg'
import imag7 from './ImagesProjects/winter-sports-04.jpg'
import imag8 from './ImagesProjects/camp-1-nzqd81p0v0pxax0zrz0q5hs1kan1290o6pe5altkig.jpg'
import imag9 from './ImagesProjects/camp-2-nzqd7cbdqhr6lg1uw61ss66liw44af7x37s1c4v76g.jpg'
import imag10 from './ImagesProjects/camp-3-nzqd6qp3daxl6ex9eepdotmzv12oddu3c8rvarr95k.jpg'
import imag11 from './ImagesProjects/camp-4-nzqd6hapgykpybawxan3zw0dx6d08esryy90i056vs.jpg'

import Footer from './Footer';



import { Pagination } from 'swiper/modules';

const Project = () => {
  return (
    <>
    <div className='proimg'>
      <Menubar/>
      <h1 className='prohd'>OUR PROJECTS</h1>
    </div>

    
    <p className='advpara'>Adventure <span className='advpara'><Line1/></span></p>
    <h3 className='watersport'>WATER SPORTS</h3>
    <p className='waterpara'>Interdum exercitation penatibus, praesentium facilisi accusamus fermentum, sagittis.</p>
  
    <div className='wintersports'>
    <p className='advpara'>Snow Adventure <span className='advpara'><Line1/></span></p>
    <h3 className='watersport'>WINTER SPORTS</h3>
    <p className='waterpara'>Interdum exercitation penatibus, praesentium facilisi accusamus fermentum, sagittis.</p>
<div>
    <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
          
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={imag} alt='img' style={{width:'350px',height:'350px'}}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={imag1} alt='img' style={{width:'350px',height:'350px'}}/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={imag2} alt='img' style={{width:'350px',height:'350px'}}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={imag3} alt='img' style={{width:'350px',height:'350px'}} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={imag} alt='img' style={{width:'350px',height:'350px'}}/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={imag1} alt='img' style={{width:'350px',height:'350px'}}/>
        </SwiperSlide>
</Swiper>
</div>
<div>
<Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
          
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={imag4} alt='img' style={{width:'350px',height:'350px'}}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={imag5} alt='img' style={{width:'350px',height:'350px'}}/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={imag6} alt='img' style={{width:'350px',height:'350px'}}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={imag7} alt='img' style={{width:'350px',height:'350px'}} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={imag4} alt='img' style={{width:'350px',height:'350px'}}/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={imag5} alt='img' style={{width:'350px',height:'350px'}}/>
        </SwiperSlide>
</Swiper>
</div>
    </div>

    <div>
    <p className='advpara'>Forest Tours <span className='advpara'><Line1/></span></p>
    <h3 className='watersport'>CAMPING</h3>
    <p className='waterpara'>Interdum exercitation penatibus, praesentium facilisi accusamus fermentum, sagittis.</p>

    </div>

    <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
          
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='swiperslide'>
          <img src={imag8} alt='img' style={{width:'350px',height:'350px'}}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={imag9} alt='img' style={{width:'350px',height:'350px'}}/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={imag10} alt='img' style={{width:'350px',height:'350px'}}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={imag11} alt='img' style={{width:'350px',height:'350px'}} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={imag8} alt='img' style={{width:'350px',height:'350px'}}/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={imag9} alt='img' style={{width:'350px',height:'350px'}}/>
        </SwiperSlide>
        
</Swiper>
    <Footer/>
    </>
  )
}

export default Project
      