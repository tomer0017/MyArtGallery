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
  setPicWidth?: (width: string) => void;
  setAnimateType?: (type: "in" | "out") => void;
  setMockupPic?: (src: string) => void;
  setMockupSofa?: (sofa_url: string) => void;
  setPicName?: (name: string) => void;
  setPicDescription?: (description: string) => void;
}

const PicCarouselGalleryDesign: React.FC<PicCarouselProps> = ({
  data,
  className,
  rightArrowClassName,
  leftArrowClassName,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [responsivePicWidth, setResponsivePicWidth] = useState("");
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

  const currentItem = data[currentIndex];

  // Update responsive width
  useEffect(() => {
    setResponsivePicWidth(
      currentItem.width >= currentItem.height
        ? (140 * (4 * window.innerWidth / 3525 + 0.557447)).toString() + "px"
        : (
            190 *
            (currentItem.width / currentItem.height) *
            (4 * window.innerWidth / 3525 + 0.557447)
          ).toString() + "px"
    );
  }, [currentIndex, currentItem.width, currentItem.height]);

  // GSAP Animation
  useEffect(() => {
    if (imgRef.current) {
      // Apply GSAP animation on the image
      gsap.fromTo(
        imgRef.current,
        { rotationY: -90, opacity: 0 },
        { rotationY: 0, opacity: 1, duration: 0.7, ease: "power2.out" }
      );
    }
  }, [currentIndex]); // Run animation whenever the currentIndex changes

  return (
    <>
      <div className="carousel-container">
        <button className={`arrow ${leftArrowClassName}`} onClick={prevPic}>
          &lt;
        </button>
        <img
          src="http://www.uploads.co.il/uploads/images/622590044.png"
          className="galleryLamp width-55 pt-4"
        />
        <div className="carousel carouselHeight">
          <img
            ref={imgRef}
            className={className}
            style={{
              maxWidth: responsivePicWidth === "0px" ? "120px" : responsivePicWidth,
            }}
            src={currentItem.src}
            alt={currentItem.title}
            onClick={() => {
              const newWidth =
                currentItem.width >= currentItem.height
                  ? "150px"
                  : `${(140 * currentItem.width) / currentItem.height}px`;
            }}
          />
        </div>
        <button className={`arrow ${rightArrowClassName}`} onClick={nextPic}>
          &gt;
        </button>
      </div>
    </>
  );
};

export default PicCarouselGalleryDesign;
