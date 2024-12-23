import React from "react";

interface ColorPickerProps {
  colors?:any;
  setSelectedColor: (color: string) => void;
  setSelectedTexture?: (url: string) => void;
  artistPic?:string;
}

interface ColorProp {
    id: number;
    color: string;
  }

export const ColorPicker: React.FC<ColorPickerProps> = ({colors,setSelectedColor,setSelectedTexture}) => {
  return (
    < div className="text-center">
    {colors.length>0 && colors.map((color:ColorProp, index: number)=>{
        
        return (
          <span
          key={index}
          onClick={() => {
            setSelectedColor(color.color);
            if (setSelectedTexture) {
              setSelectedTexture("");
            }
          }}
          style={{
            display: "inline-block",
            width: "30px",
            height: "30px",
            backgroundColor: color.color,
            borderRadius: "50%",
            marginLeft: "10px",
            marginRight: "10px",
            boxShadow: color.color === "#FFFFFF" ? "0 0 10px rgba(0,0,0,0.1)" : "0 4px 6px rgba(0,0,0,0.2)",
            border: color.color === "#D4A32D" ? "3px solid #D4A32D" : "none",
          }}
        />
        );
    })}
  </div>
  );
};

export default ColorPicker;
