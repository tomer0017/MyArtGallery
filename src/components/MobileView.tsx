import React, { useEffect, useState } from "react";
import PicCarouselGalleryDesign from "./PicCarouselGalleryDesign";
import PicCarousel from "./PicCarousel";
import ColorPicker from "./ColorPicker";

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
  return (
    
< div className="text-center pt-4 " style={{backgroundColor:selectedColor}}>
  <img src={artistPic} className="circleAvatar width-40"/> 
  <h2 className="fs-5 pt-2 pb-5">Tomer_Cohen_Art</h2>

  <ColorPicker setSelectedColor={setSelectedColor} colors={wallColorsOptions}/>

  {paintings.length>0 && <PicCarouselGalleryDesign rightArrowClassName={'side-right-arrow'}leftArrowClassName={'side-left-arrow'} data={paintings} className={"photo-on-wall"} />}

  {paintings.length>0 && <PicCarousel rightArrowClassName={'below-right-arrow'}leftArrowClassName={'below-left-arrow'} data={sofas} className={"carousel-image"} />}
  <div className=" linkContainer">
    {links.length>0 && links.map((link:LinkProp)=>{
        
        return (
        <div className="py-2 ">
            <button
            className="linkButton"
            key={link.id}
            style={{ backgroundColor: link.color }}
            onClick={() => window.open(link.link, "_blank")}
            >
            <div>
                {link.icon && <i className={link.icon}></i>}
                <span className="text-light">{link.name}</span>
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
