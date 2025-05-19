import React from "react";
import GifHeader from '../assets/gifs/headervideo2.gif';

interface HeaderProps {
  headerSrc?: string;
  className?: string;
  mainTitle?: string;
  subTitle?: string;
}

export const Header: React.FC<HeaderProps> = ({ headerSrc, className, mainTitle, subTitle }) => {
  return (
    <div className="position-relative">
      <img className={`gif_header ${className} w-100`} alt="gif" src={headerSrc || GifHeader} />
      <div className="position-absolute top-50 start-50 translate-middle text-white text-center web-view">
          <span className="header_title">{mainTitle}</span>
          <div>
          <span className="header_sub_title">{subTitle}</span>
          </div>
      </div>


    <div className="content"></div>
    </div>
  );
};

export default Header;
