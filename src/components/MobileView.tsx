import React, { useEffect, useState } from "react";
import PicCarouselGalleryDesign from "./PicCarouselGalleryDesign";
import PicCarousel from "./PicCarousel";
import ColorPicker from "./ColorPicker";
import TexturePicker from "./TexturePicker";
import PaintingWithLampFullSizeCarousel from "./PaintingWithLampFullSizeCarousel";
import Header from "./Header";
import headerVideo from "../assets/gifs/headervideo2.gif";
import AboutMe from "./AboutMe";
import { Navbar } from "react-bootstrap";
import NavbarComp from "./Navbar";
import Chips from "./Chips";

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
    icon?: string; // Optional property, since not all links may have an icon
    color: string;
  }

export const MobileView: React.FC<MobileViewProps> = ({ links,sofas,paintings,artistPic }) => {
    const [wallColorsOptions,setWallColorOptions] = useState([]);
    const [selectedColor, setSelectedColor] = useState<string>("#d6d6d6");
    const [wallTextureOptions,setWallTextureOptions] = useState([]);
    const [selectedTexture, setSelectedTexture] = useState<string>("");
    const [animateType, setAnimateType] = useState("in");

    const [wallColor,setWallColor] = useState('#d6d6d6');
  
  
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

  return (
    
< div className="mobile-view text-center" >

    <NavbarComp/>
    <Header headerVideo={headerVideo}/>
    <img src={artistPic} className="circleAvatar width-40"/> 
    <div className="d-flex justify-content-center align-items-center">
      <Chips text='@_Tomer_Cohen_Art' bgColor='' color='text-l-grey'/> 
    </div>
    
    {/* <h2 className="fs-3 pt-2 pb-2 mb-4 bg-body rubikRegular text-secondary artistName">@Tomer_Cohen_Art</h2> */}
    <AboutMe/>
    


{/* OPTION1- FULL LIVINGROOM */}

  {/* <div style={
    selectedTexture
      ? { backgroundImage: `url(${selectedTexture})`, backgroundSize: "cover", backgroundPosition: "center",paddingBottom: '60px' }
      : { backgroundColor: selectedColor, paddingBottom: '100px' }
  }> 
  <div className="mockupWallTest" >
  {paintings.length>0 && <PicCarouselGalleryDesign rightArrowClassName={'side-right-arrow'}leftArrowClassName={'side-left-arrow'} data={paintings} className={"framedPainting"} />}
    </div>  

  {
  paintings.length>0 && <PicCarousel setAnimateType={setAnimateType} animateType={animateType} rightArrowClassName={'below-right-arrow'}leftArrowClassName={'below-left-arrow'} data={sofas} className={"carousel-image"}/>}

</div>  */}

{/* OPTION2- ONLY LAMP&PAINTING */}
<div style={
    selectedTexture
      ? { backgroundImage: `url(${selectedTexture})`, backgroundSize: "cover", backgroundPosition: "center",paddingBottom: '20px' }
      : { backgroundColor: selectedColor, paddingBottom: '20px' }
  }> 
    {paintings.length>0 && <PaintingWithLampFullSizeCarousel rightArrowClassName={'side-right-arrow-full-screen'}leftArrowClassName={'side-left-arrow-full-screen'} data={paintings} className={"framedPaintingFullSize"} />}

    <div className="pb-3 ">
    <ColorPicker setSelectedColor={setSelectedColor} setSelectedTexture={setSelectedTexture} colors={wallColorsOptions}/>
    <TexturePicker setSelectedTexture={setSelectedTexture} textures={wallTextureOptions}/>
    </div>

</div> 




  <div className=" linkContainerFullScreen">
    {links.length>0 && links.map((link:LinkProp)=>{
        
        return (
        <div className="py-2 ">
            <button
            className="linkButton"
            key={link.id}
            style={{ backgroundColor: link.color }}
            onClick={() => window.open(link.link, "_blank")}
            >
                <div className="d-flex align-items-center justify-content-start">
                    {link.icon && <i className={`${link.icon} me-2 text-dark`}></i>}
                    <span className="text-dark text-center" style={{ flex: 1 }}>{link.name}</span>
                </div>
            </button>
        </div>
        );
    })}
  </div>


    </div>

  );
};

export default MobileView;
