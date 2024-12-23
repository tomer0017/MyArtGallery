import React, { useEffect, useState, } from "react";

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
  className:string;
  rightArrowClassName:string;
  leftArrowClassName:string;
  animateType:string;
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
  animateType,
  setAnimateType,
//   setPicWidth,
//   setAnimateType,
//   setMockupPic,
//   setMockupSofa,
//   setPicName,
//   setPicDescription,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [animate, setAnimate] = useState(true);
  // Go to the previous picture
  const prevPic = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  };

  // Go to the next picture
  const nextPic = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === data.length - 1 ? 0 : prevIndex + 1 )

  };

//   useEffect(() => {
//     if(setAnimateType){
//         setAnimateType("out");
//     }
//   }, [animate]);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === data.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 500);
  
//     return () => clearTimeout(timer); 
//   }, [animate]);
  

  const currentItem = data[currentIndex];
  return (
    <>
      <div className="carousel-container">
        <div className="carousel">
          <img
            className={`${className} ${ animate ? animateType === 'in' ? 'bounce-in-top' : 'slide-out-bck-center' : ''}`  }
            src={currentItem.src}
            alt={currentItem.title}
            // onClickCapture={() => setAnimateType("out")}
            onClick={() => {
            //   const newWidth = currentItem.width >= currentItem.height ? "120px" : `${(140 * currentItem.width) / currentItem.height}px`;
            //   setPicWidth(newWidth);
            //   setPicDescription(currentItem.price[0].size);
            //   setMockupPic(currentItem.src);
            //   setMockupSofa(currentItem.sofa_url);
            //   setPicName(currentItem.name);
            //   setAnimateType("in");
            }}
          />
        </div>
        <button className={`arrow ${rightArrowClassName}`} onClick={nextPic}>
          &gt;
        </button>
        <button className={`arrow ${leftArrowClassName}`}  onClick={prevPic}>
          &lt;
        </button>
      </div>

      {/* <img
        className="swipe_gif"
        src="https://cliply.co/wp-content/uploads/2021/07/392107620_SWIPE_RIGHT_400px.gif"
        alt="Swipe Right Animation"
      /> */}
    </>
  );
};

export default PicCarousel;
