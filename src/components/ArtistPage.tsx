import React, { useEffect, useState } from "react";
import PicCarouselGalleryDesign from "./PicCarouselGalleryDesign";
import PicCarousel from "./PicCarousel";
import ColorPicker from "./ColorPicker";
import TexturePicker from "./TexturePicker";
import PaintingWithLampFullSizeCarousel from "./PaintingWithLampFullSizeCarousel";
import Header from "./Header";
import headerVideo from "../assets/gifs/headervideo2.gif";
import headerImage from "../assets/gifs/headervideo2.gif";
import AboutMe from "./AboutMe";
import { Button, Navbar } from "react-bootstrap";
import NavbarComp from "./Navbar";
import Chips from "./common/Chips";
import Footer from "./Footer";
import { useIsMobile } from "./hooks/IsMobile";

interface MobileViewProps {
  sofas?: any;
  paintings?: any;
  links?:any;
  artistPic?:string;
}

interface LinkProp {
    id: number;
    name: string;
    link: string;
    icon?: string; 
    color: string;
  }

export const ArtistPage: React.FC<MobileViewProps> = ({ links,sofas,paintings,artistPic }) => {
    const [isVisible, setIsVisible] = useState<boolean>(true);
    const [wallColorsOptions,setWallColorOptions] = useState([]);
    const [selectedColor, setSelectedColor] = useState<string>("#d6d6d6");
    const [wallTextureOptions,setWallTextureOptions] = useState([]);
    const [selectedTexture, setSelectedTexture] = useState<string>("https://static.vecteezy.com/system/resources/previews/007/625/838/non_2x/old-grunge-white-cement-wall-texture-for-background-photo.jpg");
    const [frameColor, setFrameColor] = useState(true);
    const [innerFrame, setInnerFrame] = useState(true);
    const isMobile = useIsMobile();
    const headerImg = 'https://i.imagesup.co/images2/7f9433e0967c584a6585dea77d7db14f859d17c8.jpg'

    const [animateType, setAnimateType] = useState("in");

    const [wallColor,setWallColor] = useState('');
  
  
  useEffect(() => {
      const fetchColors = async () => {
        try {
          const response = await fetch("/colors.json");
          if (!response.ok) {
            throw new Error(`Failed to fetch colors.json: ${response.status}`);
          }
          const data = await response.json();
          setWallColorOptions(data);
        } catch (err: any) {
          console.error("Error fetching colors:", err);
        }
      };
  
      fetchColors();
    }, []);

    useEffect(() => {
        const fetchColors = async () => {
          try {
            const response = await fetch("/textures.json");
            if (!response.ok) {
              throw new Error(`Failed to fetch colors.json: ${response.status}`);
            }
            const data = await response.json();
            setWallTextureOptions(data);
          } catch (err: any) {
            console.error("Error fetching colors:", err);
          }
        };
    
        fetchColors();
      }, []);

      const handleChangeFrameColor = () => {
        setFrameColor((prev) => !prev);
      };
 
      const handleChangeInnerFrame = () => {
        setInnerFrame((prev) => !prev);
      };

      const toggleVisibility = () => {
        setIsVisible((prev) => !prev);
      };

  return (
    <div className="text-center">
      <NavbarComp />
      <Header headerSrc={isMobile? headerVideo: headerImg} className="h-20" mainTitle="Tomer Cohen Art"/>
      <img src={artistPic} className="circleAvatar width-60" />
      <div className="position-relative d-flex justify-content-center align-items-center">
        <Chips text="@Tomer_Cohen_Art" bgColor="" color="text-l-grey" />
      </div>
      <AboutMe />


    {/* OPTION1- FULL LIVINGROOM */}

      <div className="web-view" style={
    selectedTexture
      ? { backgroundImage: `url(${selectedTexture})`, backgroundSize: "cover", backgroundPosition: "center",paddingBottom: '60px' }
      : { backgroundColor: selectedColor, paddingBottom: '100px' }
  }> 
  <div className="mockupWallTest" >
  {paintings.length>0 && 
    <PicCarouselGalleryDesign rightArrowClassName={'side-right-arrow'}leftArrowClassName={'side-left-arrow'} data={paintings} className={"framedPainting"} />
  }
    </div>  

  {/* SOFA
  {
  paintings.length>0 && 

    <PicCarousel setAnimateType={setAnimateType} animateType={animateType} rightArrowClassName={'below-right-arrow'}leftArrowClassName=
    {'below-left-arrow'} data={sofas} className={"carousel-image"}/>
  } */}

</div> 

      {/* OPTION2- ONLY LAMP&PAINTING */}
      <div
        className="position-relative pt-4 mt-5 mobile-view"
        style={
          selectedTexture
            ? {
                backgroundImage: `url(${selectedTexture})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                paddingBottom: "20px",
              }
            : { backgroundColor: selectedColor, paddingBottom: "20px" }
        }
      >
        {/* mockup settings  */}
        <div className="pb-2">
          
          <button onClick={handleChangeInnerFrame} className="m-1 p-2 px-3 shadow  bg-dark text-light rounded-pill">
            מסגרת פנימית
          </button>
          <button onClick={handleChangeFrameColor} className="m-1 p-2 px-3 shadow bg-dark text-light rounded-pill">
            מסגרת חיצונית
          </button>

        </div>
        {paintings.length > 0 && (
          <PaintingWithLampFullSizeCarousel
            rightArrowClassName={"side-right-arrow-full-screen"}
            leftArrowClassName={"side-left-arrow-full-screen"}
            data={paintings}
            className={"framedPaintingFullSize"}
            onChangeFrameColor={handleChangeFrameColor}
            frameColor={frameColor}
            innerFrame={innerFrame}
            isVisible={isVisible}
          />
        )}

        {isVisible ? <div className="pb-3 ">
          <div className="d-flex justify-content-center">
            <div className="bg-dark w-25 text-center text-light py-1 fs-6 my-3 rounded-pill">בחר רקע</div>
          </div>
          <ColorPicker
            selectedColor = {selectedColor}
            setSelectedColor={setSelectedColor}
            setSelectedTexture={setSelectedTexture}
            colors={wallColorsOptions}
          />
          <TexturePicker
            setSelectedTexture={setSelectedTexture}
            textures={wallTextureOptions}
          />
        </div> : 
          
          <div style={{height:"152px"}}> 
            <span></span>
          </div>
        }
        <button
        onClick={toggleVisibility}
        className="btn m-1 bg-success text-white rounded-pill mt-2"
      >
         <i
          className={` px-2 ${isVisible ? 'bi bi-camera-fill' : 'bi bi-camera'}`}
          style={{ fontSize: '1.2rem' , position: 'relative', top: '2px'}}
        ></i> 
          מצב צילום   
      </button>
      </div>

      <div className=" linkContainerFullScreen">
        {links.length > 0 &&
          links.map((link: LinkProp) => {
            return (
              <div className="py-2 position-relative">
                <button
                  className="linkButton "
                  key={link.id}
                  style={{ backgroundColor: link.color }}
                  onClick={() => window.open(link.link)}
                >
                  <div className="d-flex align-items-center justify-content-start">
                    {link.icon && (
                      <i
                        className={`${link.icon} me-2 text-dark font-size-1-1rem`}
                      ></i>
                    )}
                    <span
                      className="text-dark text-center font-size-1-1rem"
                      style={{ flex: 1 }}
                    >
                      {link.name}
                    </span>
                  </div>
                </button>
              </div>
            );
          })}
      </div>
      <Footer />
    </div>
  );
};

export default ArtistPage;
