import React from "react";
import PicCarouselGalleryDesign from "./PicCarouselGalleryDesign";
import PicCarousel from "./PicCarousel";

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
  return (
    < div className="text-center">
  <img src={artistPic} className="pt-5 pb-3 w-25"/> 
  <h2 className="fs-5 pb-3">Tomer_Cohen_Art</h2>
  {paintings.length>0 && <PicCarouselGalleryDesign data={paintings} className={"photo-on-wall"} />}
  {paintings.length>0 && <PicCarousel data={sofas} className={"carousel-image"} />}
  <div className="pt-4">
    {links.length>0 && links.map((link:LinkProp)=>{
        
        return (
        <div className="py-2">
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
