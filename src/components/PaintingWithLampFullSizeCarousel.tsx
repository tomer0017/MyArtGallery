import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

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
  frameColor: boolean;
  innerFrame: boolean;
  isVisible: boolean;
  onChangeFrameColor: () => void; 
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
  frameColor,
  innerFrame,
  isVisible,
  onChangeFrameColor,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [responsivePicWidth, setResponsivePicWidth] = useState("");
  const [isBlack, setIsBlack] = useState(true);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const lampImgRef = useRef<HTMLImageElement | null>(null); // Ref for the second image

  // Go to the previous picture
  const prevPic = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const toggleClass = () => {
    setIsBlack((prev) => !prev);
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
        ? (250 * (4 * window.innerWidth / 3525 + 0.557447)).toString() + "px"
        : (
            290 *
            (currentItem.width / currentItem.height) *
            (4 * window.innerWidth / 3525 + 0.557447)
          ).toString() + "px"
    );
  }, [currentIndex, currentItem.width, currentItem.height]);

  // GSAP Animation for the main image
  useEffect(() => {
    if (imgRef.current) {
      gsap.fromTo(
        imgRef.current,
        { scale: 0.2, rotate: -700, opacity: 0 },
        { scale: 1, rotate: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
      );
    }

    // GSAP Animation for the lamp image
    if (lampImgRef.current) {
      gsap.fromTo(
        lampImgRef.current,
        { opacity: 0.4 },
        { opacity: 1, duration: 0.6, ease: "power2.out" }
      );
    }
  }, [currentIndex]); // Re-run animation when the currentIndex changes

  return (
    <>
      <div className="carousel-container">
        {
          isVisible ? <button className={`arrow ${leftArrowClassName}`} onClick={prevPic}>
            &lt;
          </button> : ""
        }  
        <img
          ref={lampImgRef} // Add ref to the second image
          src="http://www.uploads.co.il/uploads/images/622590044.png"
          className="galleryLampFullSize galleryLampFullSize width-80 pt-4"
        />
        <div className="carousel carouselHeight" ref={imgRef}>
          <div className={frameColor ? 'black-outer-border' : 'white-outer-border'}
            onClick={onChangeFrameColor}>
            <div className={innerFrame ? 'middle-border' : 'width-middle-border'}>
              <img
                
                className='inner-border'
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
          </div>
        </div>
        {
          isVisible ? 
        <button className={`arrow ${rightArrowClassName}`} onClick={nextPic}>
          &gt;
        </button>
        : ""
      } 
      </div>
    </>
  );
};

export default PicCarouselGalleryDesign;
