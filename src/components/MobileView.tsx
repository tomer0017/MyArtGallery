import React, { useEffect, useState } from "react";
import PicCarouselGalleryDesign from "./PicCarouselGalleryDesign";
import PicCarousel from "./PicCarousel";
import ColorPicker from "./ColorPicker";
import TexturePicker from "./TexturePicker";

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
    
< div className="text-center pt-4 " >
  <img src={artistPic} className="circleAvatar width-40"/> 
  <h2 className="fs-3 pt-2 pb-2 mt-4 mb-5 bg-body rubikRegular text-secondary">Tomer_Cohen_Art</h2>
    <div className="pb-3">
    <ColorPicker setSelectedColor={setSelectedColor} setSelectedTexture={setSelectedTexture} colors={wallColorsOptions}/>
    <TexturePicker setSelectedTexture={setSelectedTexture} textures={wallTextureOptions}/>
    </div>
  <div style={
    selectedTexture
      ? { backgroundImage: `url(${selectedTexture})`, backgroundSize: "cover", backgroundPosition: "center",paddingBottom: '60px' }
      : { backgroundColor: selectedColor, paddingBottom: '100px' }
  }> 
  <div className="mockupWallTest" >
  {paintings.length>0 && <PicCarouselGalleryDesign rightArrowClassName={'side-right-arrow'}leftArrowClassName={'side-left-arrow'} data={paintings} className={"framedPainting"} />}
    </div>  

  {
  paintings.length>0 && <PicCarousel setAnimateType={setAnimateType} animateType={animateType} rightArrowClassName={'below-right-arrow'}leftArrowClassName={'below-left-arrow'} data={sofas} className={"carousel-image"}/>}

</div> 

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
