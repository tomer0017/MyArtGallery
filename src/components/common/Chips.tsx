import React from "react";

interface ChipsProps {
  color?:string;
  bgColor?:string;
  text?:string;
}

export const Chips: React.FC<ChipsProps> = ({color,bgColor,text}) => {
  return (
    <div
    className={`chips-250 fs-6 text-center d-flex justify-content-center align-items-center rubikBold ${color ? `${color}` : ""} ${
      bgColor ? `chips--bg-${bgColor}` : ""
    }`}
  >
    {text}
  </div>
  );
};

export default Chips;
