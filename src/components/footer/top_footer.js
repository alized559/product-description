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
            <a href='#'>The Concept</a><br/>
            <a href='#'>Partner Services</a>
          </p>
        </div>

        <div>
          <h5>BUY</h5>
          <p>
            <a href='#'>Tracking</a><br/>
            <a href='#'>Authentication</a><br/>
            <a href='#'>Shipping Policy</a><br/>
            <a href='#'>Return Policy</a><br/>
            <a href='#'>Quality Control</a>
          </p>
        </div>

        <div>
          <h5>SELL</h5>
          <p>
            <a href='#'>How To Sell</a><br/>
            <a href='#'>Sell an Item</a><br/>
            <a href='#'>Handling</a><br/>
            <a href='#'>Trusted Sellers</a>
          </p>
        </div>

        <div>
          <h5>HELP</h5>
          <p>
            <a href='#'>Help Center</a>
          </p>
        </div>

        <div>
          <h5>LIBAS LLC</h5>
          <p>
            <a href='#'>About US</a><br/>
            <a href='#'>How it works</a><br/>
            <a href='#'>Latest Stories</a><br/>
            <a href='#'>Our Team</a><br/>
            <a href='#'>Join Us</a><br/>
            <a href='#'>Contact Us</a><br/>
          </p>
        </div>
      </LinksContainer>
      <VerticalLine />
      <FooterBot>
        <p>Lebanon - English US - $ - USD <i className='fa fa-angle-down'></i></p>
        <FooterBotFlex>
          <FooterBotFlexItem>
            <p><a href='#'>Legal Information</a></p>
            <p><a href='#'>Terms and Conditions</a></p>
            <p><a href='#'>Privacy Policy & Cookies</a></p>
            <p><a href='#'>Partners</a></p>
            <div>
              <a href='#'><i className='fa fa-twitter-square'></i></a>
              <a href='#'><i className='fa fa-facebook-square'></i></a>
              <a href='#'><i className='fa fa-instagram'></i></a>
            </div>
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
  font-family: Montserrat-Medium;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 70px 100px 20px 100px;

  > div > h5 {
    color: white;
    font-family: Montserrat-Bold;
  }

  > div > p > a {
    color: #737171;
    line-height: 32px;
    margin-top: 18px;
    font-family: Montserrat-Medium;
    text-decoration: none;

    &:hover {
      color: #C6AC96;
      transition: 0.3s;
    }
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
    cursor: pointer;
  }

  @media only screen and (max-width: 550px) {
    padding: 70px 0 20px 0;
    width: 60%
    margin: auto;

    > p {
      text-align: center;
    }
  }
`;

const FooterBotFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  > div > p > a {
    color: #737171;
    padding-right: 25px;
    text-decoration: none;

    &:hover {
      color: #C6AC96;
      transition: 0.3s;
    }

    @media only screen and (max-width: 550px) {
      padding-right: 0;
    }
  }

  > div > div > a > i {
    margin-top: 5px;
    color: #737171;
    padding-right: 15px;
    cursor: pointer;

    &:hover {
      color: #C6AC96;
      transition: 0.3s;
    }

    @media only screen and (max-width: 550px) {
      margin-bottom: 30px;
      padding-right: 7px;
      font-size: 22px;
    }
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
    font-size: 14px;
  }

  @media only screen and (max-width: 550px) {
    flex-direction: column;

    > a > img:first-child {
      margin-right: 0;
      margin-bottom: 10px;
    }
  }
`;

export default TopFooter;
