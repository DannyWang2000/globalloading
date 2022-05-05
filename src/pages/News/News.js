import React from 'react'

import { Carousel } from 'antd';

export default function News() {


  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  return (
    <div>
      <Carousel effect="fade">
        <div className='swiper'>
          <h3 style={contentStyle}>999</h3>
        </div>
        <div className='swiper'>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div className='swiper'>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div className='swiper'>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </div>
  )
}
