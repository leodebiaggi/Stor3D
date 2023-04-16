import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SliderContainer() {
  const sliderSettings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...sliderSettings}>
      <div>
        <img src="img/Wallpaper/1.jpg" alt="imagen 1"/>
      </div>
      <div>
        <img src="img/Wallpaper/2.jpg" alt="imagen 2"/>
      </div>
      <div>
        <img src="img/Wallpaper/3.jpg" alt="imagen 3"/>
      </div>
    </Slider>
  );
}

export default SliderContainer;

