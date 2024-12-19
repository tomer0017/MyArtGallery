import React, { useState, useEffect } from "react";

interface MockupProps {
  picWidth: number;
  mockupPic: string;
  animate?: boolean;
  animateType?: "in" | "out";
  mockupSofa: string;
}

const Mockup: React.FC<MockupProps> = ({
  picWidth,
  mockupPic,
  animate = false,
  animateType = "in",
  mockupSofa,
}) => {
  const [changeFrame, setChangeFrame] = useState(true);
  const [picSize, setPicSize] = useState(
    (picWidth / 400) * window.innerWidth + "px"
  );

  useEffect(() => {
    setPicSize((picWidth * (4 * window.innerWidth / 3525 + 0.557447)) + "px");
  }, [picWidth]);

  useEffect(() => {
    setPicSize((picWidth * (4 * window.innerWidth / 3525 + 0.557447)) + "px");
  }, [mockupPic]);

  return (
    <div>
      <img
        onClick={() => setChangeFrame(!changeFrame)}
        src={mockupPic}
        style={{ width: picSize === "0px" ? "120px" : picSize }}
        className={
          changeFrame
            ? `mockup_pic ${
                animate
                  ? animateType === "in"
                    ? "slide-in-blurred-top"
                    : "slide-out-bck-center"
                  : ""
              }`
            : "clicked_mockup_pic"
        }
        alt="Mockup"
      />
      <img
        src={mockupSofa}
        className={`mockup_sofa ${
          animate
            ? animateType === "in"
              ? "bounce-in-top"
              : "slide-out-bck-center"
            : ""
        }`}
        alt="Mockup Sofa"
      />
      <img
        className="mockup_left_pot"
        src="http://www.uploads.co.il/uploads/images/327016387.png"
        alt="Left Pot"
      />
      {/* <img className="mockup_floor_lamp" src="http://www.uploads.co.il/uploads/images/66243597.png" alt="Floor Lamp" /> */}
    </div>
  );
};

export default Mockup;
