// Carousel.tsx
import React from "react";
import Slider from "react-slick";

const Carousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 images (previous, current, next)
    slidesToScroll: 1,
    centerMode: true, // Center the current slide
    focusOnSelect: true, // Make the current slide selectable
    nextArrow: <div>Next</div>, // Customize the next arrow
    prevArrow: <div>Prev</div>, // Customize the previous arrow
  };

  return (
    <div style={{ width: "20%", margin: "auto" }}>
      <Slider {...settings}>
        <div>
          <img src="https://via.placeholder.com/600x300" alt="Slide 1" />
        </div>
        <div>
          <img src="https://via.placeholder.com/600x300" alt="Slide 2" />
        </div>
        <div>
          <img src="https://via.placeholder.com/600x300" alt="Slide 3" />
        </div>
        <div>
          <img src="https://via.placeholder.com/600x300" alt="Slide 4" />
        </div>
        <div>
          <img src="https://via.placeholder.com/600x300" alt="Slide 5" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
