import React from "react";
import GifHeader from '../assets/gifs/headervideo2.gif';

interface HeaderProps {
  headerVideo?: string;
}

export const Header: React.FC<HeaderProps> = ({ headerVideo }) => {
  return (
    <div className="">
      {/**TODO - COMPONENT */}
      <img className="gif_header w-100" alt="gif" src={headerVideo || GifHeader} />
      <div className="content">
        {/* <h6>Welcome to my world</h6> */}
      </div>
    </div>
  );
};

export default Header;
