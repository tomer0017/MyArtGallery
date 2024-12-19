import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className='text-center bg-dark'>
      <div>
        <h4 className='text-light pt-3'>
          Find the latest work on social media
        </h4>
      </div>

      {/* <Row>
            <Col>
                <img width={'260vh'} style={{padding:'30px'}} src={artist_pic}/>
            </Col>
        </Row> */}

      <div>
        <a href="https://www.google.co.il" target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn.iconscout.com/icon/free/png-512/free-instagram-1946323-1646407.png?f=webp&w=256"
            alt="Instagram"
            width={30}
          />
        </a>
        <a href="https://www.google.co.il" target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn.iconscout.com/icon/free/png-512/free-tiktok-11306346-9343757.png?f=webp&w=256"
            alt="TikTok"
            width={30}
          />
        </a>
      </div>

      <div className='line_space' style={{ marginTop: '15px' }}></div>
      <h6 style={{ color: 'rgb(157 157 157)', marginBottom: '0px', paddingBottom: '20px' }}>
        זכויות שמורות לTomerCohenArt
      </h6>
    </div>
  );
};

export default Footer;
