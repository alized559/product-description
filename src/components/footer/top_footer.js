import React from 'react';
import styled from 'styled-components';
import dawnloadAppOnAppleImage from '../../images/appleImage.jpg';
import dawnloadAppOnAndroidImage from '../../images/androidImage.jpg';

const TopFooter = () => {
  return (
    <FooterContainer>
      <LinksContainer>
        <div>
          <h5>OUR SERVICES</h5>
          <p>
            The Concept<br/>
            Partner Services
          </p>
        </div>

        <div>
          <h5>BUY</h5>
          <p>
            Tracking<br/>
            Authentication<br/>
            Shipping Policy<br/>
            Return Policy<br/>
            Quality Control
          </p>
        </div>

        <div>
          <h5>SELL</h5>
          <p>
            How To Sell<br/>
            Sell an Item<br/>
            Handling<br/>
            Trusted Sellers
          </p>
        </div>

        <div>
          <h5>HELP</h5>
          <p>
            Help Center
          </p>
        </div>

        <div>
          <h5>LIBAS LLC</h5>
          <p>
            About US<br/>
            How it works<br/>
            Latest Stories<br/>
            Our Team<br/>
            Join Us<br/>
            Contact Us<br/>
          </p>
        </div>
      </LinksContainer>
      <VerticalLine />
      <FooterBot>
        <p>Lebanon - English US - $ - USD <i className='fa fa-angle-down'></i></p>
        <FooterBotFlex>
          <FooterBotFlexItem>
            <p>Legal Information</p>
            <p>Terms and Conditions</p>
            <p>Privacy Policy & Cookies</p>
            <p>Partners</p>
            <i className='fa fa-twitter-square'></i>
            <i className='fa fa-facebook-square'></i>
            <i className='fa fa-instagram'></i>
          </FooterBotFlexItem>

          <FooterBotFlexItem>
            <a href='#'><img src={dawnloadAppOnAppleImage} /></a>
            <a href='#'><img src={dawnloadAppOnAndroidImage} /></a>
          </FooterBotFlexItem>
        </FooterBotFlex>
      </FooterBot>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  background-color: #221f1e;
  padding-bottom: 20px;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 70px 100px 20px 100px;

  > div > h5 {
    color: white;
  }

  > div > p {
    color: #737171;
    line-height: 32px;
    margin-top: 18px;
  }

  @media only screen and (max-width: 950px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const VerticalLine = styled.div`
  border-bottom: 1px solid #4d4a4a;
`;

const FooterBot = styled.div`
  padding: 70px 100px 20px 100px;

  > p {
    color: #e4e3e3;
  }
`;

const FooterBotFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  > div > p {
    color: #737171;
    padding-right: 25px;
  }

  > div > i {
    margin-top: 5px;
    color: #737171;
    padding-right: 15px;
  }

  @media only screen and (max-width: 1190px) {
    flex-direction: column;
  }

  @media only screen and (max-width: 735px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const FooterBotFlexItem = styled.div`
  display: flex;
  flex-direction: row;

  > a > img {
    width: 100px;
    height: 30px;
    border-radius: 7px;
    border: 1px solid #737171;
  }

  > a > img:first-child {
    margin-right: 40px;
  }

  @media only screen and (max-width: 735px) {
    > a > img:first-child {
      margin-right: 10px;
    }
  }
`;

export default TopFooter;
