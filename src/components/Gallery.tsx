import React from "react";
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col'; 
import Container from 'react-bootstrap/Container'; 

interface GalleryItem {
  src: string;
  name: string;
}

interface MyGalleryProps {
  data: GalleryItem[];
}

export const MyGallery: React.FC<MyGalleryProps> = ({ data }) => {
  return (
    <div className='my_gallery text-center'>
      <h2 className="bg-dark text-light fs-1 py-2" >Tomer Cohen Art</h2>

      <Container className="pt-5">
        <Row>
          {data.map((item, index) => (
            <Col sm={6} xs={12} md={6} key={index} className="py-5 text-center">
              <div className="w-100 ">
              <img src="http://www.uploads.co.il/uploads/images/891510666.png" className="w-75 pt-5" />

              </div>
              <img 
                className='my_gallery_pic text-center' 
                src={item.src} 
                height={'430vh'} 
                alt={item.name} 
              />
              <div className="artNoteName bg-light rounded-3 w-25 mx-auto mt-2">
                <p className="rubikBold  py-3 mx-2">{item.name}</p>
              </div>
            </Col>
          ))}
        </Row>  
      </Container>


    </div>
  );
};

export default MyGallery;
