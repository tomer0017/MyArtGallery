import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className='text-center bg-dark position-relative py-3 mt-5'>
      <div className='web-view'>
        <h4 className='text-light fs-6 pt-3'>
          Find the latest work on social media
        </h4>
      </div>

      <div className='mobile-view'>
        <h4 className='text-light fs-6 pt-2'>
          Contact us
        </h4>
      </div>

      {/* <Row>
            <Col>
                <img width={'260vh'} style={{padding:'30px'}} src={artist_pic}/>
            </Col>
        </Row> */}

      <div className='web-view'>
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

      <div className='mobile-view'>
        <a href="https://www.google.co.il" target="_blank" rel="noopener noreferrer">
          <img
          className='py-2'
            src="https://static-00.iconduck.com/assets.00/whatsapp-icon-2040x2048-8b5th74o.png"
            alt="Instagram"
            width={30}
          />
        </a>
      </div>

      <div className='line_space' style={{ marginTop: '15px' }}></div>
      <h6 style={{ color: 'rgb(157 157 157)', marginBottom: '0px', paddingBottom: '20px' }}>
        TomerCohenArt זכויות שמורות ל Ⓒ 
      </h6>
    </div>
  );
};

export default Footer;
