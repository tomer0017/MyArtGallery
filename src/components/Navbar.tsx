import React from "react";
// import Container from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav';
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/images/black_logo.png";
import Logo_2 from "../assets/images/logo_sofi.png";

export const NavbarComp: React.FC = () => {
  return (
    <Navbar className="position-relative d-flex justify-content-center justify-content-md-start" dir="rtl" bg="dark" data-bs-theme="dark">
      <div className="ps-2" style={{ display: "ruby" }}>
        <Navbar.Brand href="#home">
          <img className="logo" src={Logo_2} alt="Logo" />
        </Navbar.Brand>
        <Nav>
          {/* <Nav.Link href="#home" style={{ fontSize: 18 }}> //TODO
            הדפסים למכירה
          </Nav.Link>
          <Nav.Link href="#features" style={{ fontSize: 18 }}>
            ציורים מקוריים
          </Nav.Link>
          <Nav.Link href="#pricing" style={{ fontSize: 18 }}>
            אודות
          </Nav.Link>
          <Nav.Link href="#pricing2" style={{ fontSize: 18 }}>
            צור קשר
          </Nav.Link> */}
        </Nav>
        <Nav>
          <Nav.Link>
            <img
              src="https://cdn.iconscout.com/icon/free/png-512/free-instagram-1946323-1646407.png?f=webp&w=256"
              alt="Instagram"
              width={40}
            />
            <img
              src="https://cdn.iconscout.com/icon/free/png-512/free-tiktok-11306346-9343757.png?f=webp&w=256"
              alt="TikTok"
              width={30}
            />
          </Nav.Link>
        </Nav>
      </div>
    </Navbar>


  );
};

export default NavbarComp;
