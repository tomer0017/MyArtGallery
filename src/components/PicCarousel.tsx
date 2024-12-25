import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

// Define the types for the props
interface PicCarouselProps {
  data: Array<{
    src: string;
    title: string;
    width: number;
    height: number;
    price: Array<{ size: string }>;
    sofa_url: string;
    name: string;
  }>;
  className: string;
  rightArrowClassName: string;
  leftArrowClassName: string;
  animateType: string;
  setPicWidth?: (width: string) => void;
  setAnimateType?: (type: "in" | "out") => void;
  setMockupPic?: (src: string) => void;
  setMockupSofa?: (sofa_url: string) => void;
  setPicName?: (name: string) => void;
  setPicDescription?: (description: string) => void;
}

const PicCarousel: React.FC<PicCarouselProps> = ({
  data,
  className,
  rightArrowClassName,
  leftArrowClassName,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const imgRef = useRef<HTMLImageElement | null>(null);

  // Go to the previous picture
  const prevPic = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  // Go to the next picture
  const nextPic = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  // GSAP Animation
  useEffect(() => {
    if (imgRef.current) {
      // Apply GSAP animation on the current image
      gsap.fromTo(
        imgRef.current,
        { opacity: 0, scale: 0.2 },
        { opacity: 1, scale: 1, duration: 0.8 }
      );
    }
  }, [currentIndex]); // Re-run animation whenever the currentIndex changes

  const currentItem = data[currentIndex];

  return (
    <>
      <div className="carousel-container">
        <div className="carousel">
          <img
            ref={imgRef}
            className={className}
            src={currentItem.src}
            alt={currentItem.title}
          />
        </div>
        <button className={`arrow ${rightArrowClassName}`} onClick={nextPic}>
          &gt;
        </button>
        <button className={`arrow ${leftArrowClassName}`} onClick={prevPic}>
          &lt;
        </button>
      </div>
    </>
  );
};

export default PicCarousel;
