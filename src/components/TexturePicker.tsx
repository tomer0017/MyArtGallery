import React from "react";

interface TexturePickerProps {
  textures?:any;
  setSelectedTexture: (url: string) => void;
}

interface TextureProp {
    id: number;
    url: string;
  }

export const TexturePicker: React.FC<TexturePickerProps> = ({textures,setSelectedTexture}) => {
  return (
    < div className="text-center">
    {textures.length>0 && textures.map((texture:TextureProp, index: number)=>{
        
        return (
          <span
          key={index}
          onClick={() => setSelectedTexture(texture.url)}
          style={{
            display: "inline-block",
            width: "30px",
            height: "30px",
            backgroundImage: `url(${texture.url})`, // Use the URL for the background image
            backgroundSize: "cover", // Ensures the image covers the circle
            backgroundPosition: "center", // Centers the image
            borderRadius: "50%",
            marginLeft: "10px",
            marginRight: "10px",
            boxShadow: texture.url === "#FFFFFF" ? "0 0 10px rgba(0,0,0,0.1)" : "0 4px 6px rgba(0,0,0,0.2)",
            // border: selectedColor === color.url ? "3px solid #FFD700" : "none", // Highlight selected color
            cursor: "pointer", // Show it's clickable
          }}
        />
        
        );
    })}
  </div>
  );
};

export default TexturePicker;
