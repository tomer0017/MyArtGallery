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
//   setPicWidth,
//   setAnimateType,
//   setMockupPic,
//   setMockupSofa,
//   setPicName,
//   setPicDescription,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [responsivePicWidth,setResponsivePicWidth]=useState('')
  // Go to the previous picture
  const prevPic = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  };

  // Go to the next picture
  const nextPic = () => {
    setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
  };

  const currentItem = data[currentIndex];
  // Update width on initial load
//   useEffect(() => {
//     setPicWidth("150px");
//   }, [setPicWidth]);
  useEffect(()=>{
    setResponsivePicWidth((currentItem.width>=currentItem.height) ? 
    (140*(4*window.innerWidth/3525+0.557447)).toString()+'px' : 
    ((190*currentItem.width/currentItem.height*(4*window.innerWidth/3525+0.557447)).toString()+'px'))
    
  },[currentIndex])
  console.log(className)
  return (
    <>
      <div className="carousel-container">
        <button className={`arrow ${leftArrowClassName}`} onClick={prevPic}>
          &lt;
        </button>
        <img src="http://www.uploads.co.il/uploads/images/622590044.png" className="galleryLamp width-60 pt-5" />
        <div className="carousel carouselHeight">
          <img
            className={className}
            style={{maxWidth:responsivePicWidth=='0px'?'120px':responsivePicWidth}}
            src={currentItem.src}
            alt={currentItem.title}
            // onClickCapture={() => setAnimateType("out")}
            onClick={() => {
              const newWidth = currentItem.width >= currentItem.height ? "150px" : `${(140 * currentItem.width) / currentItem.height}px`;
            //   setPicWidth(newWidth);
            //   setPicDescription(currentItem.price[0].size);
            //   setMockupPic(currentItem.src);
            //   setMockupSofa(currentItem.sofa_url);
            //   setPicName(currentItem.name);
            //   setAnimateType("in");
            }}
          />
        </div>
            {/* <div className="artNoteName bg-light rounded-3 w-25 mx-auto mt-2">
                <p className="rubikBold fs-6 py-2 mx-2">{currentItem.name}</p>
              </div> */}
        <button className={`arrow ${rightArrowClassName}`} onClick={nextPic}>
          &gt;
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

export default PicCarouselGalleryDesign;
