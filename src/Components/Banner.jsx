import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <div className="w-full h-[500px] bg-[#17181a]  p-[100px]">
        <Slider {...settings}>
          {/* Banner Slide 1 */}
          <div>
            <img
              className="w-full h-80 object-cover "
              src="https://www.kingkutter.com/images/thumbs/0000112_tg-48-parts-diagram_550.jpeg"
              alt="Banner 1"
            />
          </div>

          {/* Banner Slide 2 */}
          <div>
            <img
              className="w-full h-80 object-cover"
              src="https://woodsequipment.com.au/wp-content/uploads/2021/04/TC60-TCR60-TC68-TCR68-TC74-TCR74-Rotary-Tiller-Manual.jpg"
              alt="Banner 2"
            />
          </div>

          {/* Banner Slide 3 */}
          <div>
            <img
              className="w-full h-80 object-cover"
              src="https://az417944.vo.msecnd.net/diagrams/manufacturer/simplicity/simplicity/attachments-accessories/rototiller-attachments/1600199-rotary-tiller-48/48-rotary-tiller-frame-tines-group/diagram.gif"
              alt="Banner 3"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
