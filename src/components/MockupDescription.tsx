import React from "react";

interface MockupDescriptionProps {
  picName: string;
  picDescription: string;
}

export const MockupDescription: React.FC<MockupDescriptionProps> = ({
  picName,
  picDescription,
}) => {
  return (
    <div className="mockup_description">
      <h2>{picName}</h2>
      <h3>{picDescription}</h3>
    </div>
  );
};

export default MockupDescription;
