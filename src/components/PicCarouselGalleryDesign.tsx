import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

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

  // GSAP ScrollTrigger Animation for the image
  useEffect(() => {
    if (imgRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: imgRef.current,
          scrub: 1,
          pin: false,
          start: "top 80%", // Start animation when 80% of the image is in the viewport
          end: "bottom 20%", // End animation when 20% of the image is in the viewport
        },
      });

      tl.fromTo(
        imgRef.current,
        { opacity: 0, scale: 0.8, rotateY: -90 }, // Start state
        { opacity: 1, scale: 1, rotateY: 0, duration: 1 } // End state
      );
    }
  }, [currentIndex]);

  // Responsive width calculation
  useEffect(() => {
    const currentItem = data[currentIndex];
    setResponsivePicWidth(
      currentItem.width >= currentItem.height
        ? (140 * (4 * window.innerWidth / 3525 + 0.557447)).toString() + "px"
        : (
            190 *
            (currentItem.width / currentItem.height) *
            (4 * window.innerWidth / 3525 + 0.557447)
          ).toString() + "px"
    );
  }, [currentIndex]);

  // Change picture
  const prevPic = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const nextPic = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentItem = data[currentIndex];

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
