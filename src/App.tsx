import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import headerVideo from "./assets/gifs/headervideo2.gif";
import Header from './components/Header';
import './style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import NavbarComp from './components/Navbar';
import { Col, Container, Row } from 'react-bootstrap';
import AboutMe from './components/AboutMe';
import MockupDescription from './components/MockupDescription';
import PicCarousel from './components/PicCarousel';
import Gallery from './components/Gallery';
import Footer from './components/Footer';


function App() {
  const [paintings, setPaintings] = useState([]);
  const [sofas, setSofas] = useState([]);
  const [picName, setPicName] = useState('');
  const [picDescription, setPicDescription] = useState('');
  // const [mockupPic,setMockupPic]=useState("http://www.uploads.co.il/uploads/images/330658142.jpeg")
  // const [mockupSofa,setMockupSofa]=useState("http://www.uploads.co.il/uploads/images/248736505.png")
  // const [animate, setAnimate] = useState(false);
  // const [animateType, setAnimateType] = useState("in");
  // const[picWidth,setPicWidth]=useState('100')
  const artist_pic = "http://www.uploads.co.il/uploads/images/973892682.png";
  
  useEffect(() => {
    fetch("/paintings.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setPaintings(data);
        console.log("Fetched data:", data); // Log the data to the console
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    fetch("/sofas.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setSofas(data);
        console.log("Fetched data:", data); // Log the data to the console
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <NavbarComp/>
      <div className='mockupWall'>
        <Row>
            <Col xs={3} md={3}>
              <MockupDescription   picName={picName} picDescription={picDescription}  />
            </Col>
            <Col>
              {/* <Mockup  picWidth={100} mockupPic={"http://www.uploads.co.il/uploads/images/330658142.jpeg"} animate={animate} mockupSofa={"http://www.uploads.co.il/uploads/images/248736505.png"}  /> */}
            </Col>
        </Row>

            
        {paintings.length>0 && <PicCarousel data={paintings} className={"photo-on-wall"}   setPicName={setPicName}  setPicDescription={setPicDescription}/>}

        {sofas.length>0 &&<PicCarousel  data={sofas} className={"carousel-image"}   setPicName={setPicName}  setPicDescription={setPicDescription}/>}

         </div>
      <Container dir='rtl'>
        <Row className='about_me my-5'>
      <Col className='about_me_text' md={6} xs={12} >
        <AboutMe/>
      </Col>
      <Col md={6} xs={12}>
      <img className='about_me_pic' alt="pic for about me" src={artist_pic} />
      </Col>
    </Row>
      </Container>
       <Header headerVideo={headerVideo}/>



      
         {/* <div className='mockup_wall'> */}
         {/* <div className='image-container'></div> */}
       {/* <Carousel/> */}

       {paintings.length>0 && <Gallery   data={paintings}  /> }

      <img src="https://i.etsystatic.com/isbl/6a72cb/68392929/isbl_3360x840.68392929_akpnko9r.jpg?version=0" style={{    padding:"1px",
      borderRadius: "30px 30px 0px 0px",border:"1rem solid"}} width={"100%"}/>

      <Footer/>
    </>
  )
}

export default App
