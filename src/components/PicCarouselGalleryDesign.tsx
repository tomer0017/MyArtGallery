import React, { useState, } from "react";

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
//   setPicWidth,
//   setAnimateType,
//   setMockupPic,
//   setMockupSofa,
//   setPicName,
//   setPicDescription,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Go to the previous picture
  const prevPic = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  };

  // Go to the next picture
  const nextPic = () => {
    setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
  };

  // Update width on initial load
//   useEffect(() => {
//     setPicWidth("150px");
//   }, [setPicWidth]);

  const currentItem = data[currentIndex];
  console.log(className)
  return (
    <>
      <div className="carousel-container">
        <button className="arrow left-arrow" onClick={prevPic}>
          &lt;
        </button>
        <img src="http://www.uploads.co.il/uploads/images/891510666.png" className="galleryLamp w-75 pt-5" />
        <div className="carousel">
          <img
            className={className}
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
            <div className="artNoteName bg-light rounded-3 w-25 mx-auto mt-2">
                <p className="rubikBold fs-6 py-2 mx-2">{currentItem.name}</p>
              </div>
        <button className="arrow right-arrow" onClick={nextPic}>
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
