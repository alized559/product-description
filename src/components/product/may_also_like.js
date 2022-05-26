import React from 'react';
import styled from 'styled-components';
import ProductGrid from './product_grid'
import ClockImage from '../../images/popular_products/clock.jfif';
import Image from '../../images/popular_products/image.jfif';
import ClockImage1 from '../../images/popular_products/clock1.jfif';
import WalletImage from '../../images/popular_products/wallet.png';
import LocationImage from '../../images/location.png';

const MayAlsoLike = () => {
  return (
    <ProductContainer className='container-fluid'>
      <Row className='row'>
        <div className='col'>
          <a href='#'>
            <ProductCard>
              <ProductFlex>
                <img src={ClockImage} width='160px' height='200px' />
                <div>
                  <i className='fa fa-heart-o' style={{ fontSize: '22px', marginRight: '5px' }}></i>
                  <i className='fa fa-bookmark-o' style={{ fontSize: '22px' }}></i>
                </div>
              </ProductFlex>
              <br/>
              <p style={{ fontFamily: 'Montserrat-Bold', color: 'black', fontSize: '16px' }}>Rolex</p>
              <p>Oyster-perpetual</p>
              <p style={{ color: '#C6AC96' }}>11,700 USD</p>
              <p><img src={LocationImage} width='20px' height='20px' />Beirut</p>
            </ProductCard>
          </a>
        </div>

        <div className='col'>
          <a href='#'>
            <ProductCard>
              <ProductFlex>
                <img src={Image} width='160px' height='200px' />
                <div>
                  <i className='fa fa-heart-o' style={{ fontSize: '22px', marginRight: '5px' }}></i>
                  <i className='fa fa-bookmark-o' style={{ fontSize: '22px' }}></i>
                </div>
              </ProductFlex>
              <br/>
              <p style={{ fontFamily: 'Montserrat-Bold', color: 'black', fontSize: '16px' }}>Rolex</p>
              <p>Oyster-perpetual</p>
              <p style={{ color: '#C6AC96' }}>11,700 USD</p>
              <p><img src={LocationImage} width='20px' height='20px' />Beirut</p>
            </ProductCard>
          </a>
        </div>

        <div className='col'>
          <a href='#'>
            <ProductCard>
              <ProductFlex>
                <img src={ClockImage1} width='160px' height='200px' />
                <div>
                  <i className='fa fa-heart-o' style={{ fontSize: '22px', marginRight: '5px' }}></i>
                  <i className='fa fa-bookmark-o' style={{ fontSize: '22px' }}></i>
                </div>
              </ProductFlex>
              <br/>
              <p style={{ fontFamily: 'Montserrat-Bold', color: 'black', fontSize: '16px' }}>Rolex</p>
              <p>Oyster-perpetual</p>
              <p style={{ color: '#C6AC96' }}>11,700 USD</p>
              <p><img src={LocationImage} width='20px' height='20px' />Dubai</p>
            </ProductCard>
          </a>
        </div>

        <div className='col'>
          <a href='#'>
            <ProductCard>
              <ProductFlex>
                <img src={WalletImage} width='160px' height='200px' />
                <div>
                  <i className='fa fa-heart-o' style={{ fontSize: '22px', marginRight: '5px' }}></i>
                  <i className='fa fa-bookmark-o' style={{ fontSize: '22px' }}></i>
                </div>
              </ProductFlex>
              <br/>
              <p style={{ fontFamily: 'Montserrat-Bold', color: 'black', fontSize: '16px' }}>Rolex</p>
              <p>Oyster-perpetual</p>
              <p style={{ color: '#C6AC96' }}>11,700 USD</p>
              <p><img src={LocationImage} width='20px' height='20px' />Beirut</p>
            </ProductCard>
          </a>
        </div>
      </Row>
    </ProductContainer>
  );
};

const ProductContainer = styled.div`
  background-color: #F9F9F9;
  padding: 130px 100px 100px 100px;
  margin-top: 50px;
  font-family: Montserrat-Medium;

  > div > div > a {
    color: inherit;

    &:hover {
      text-decoration: none;
      color: inherit;
    }
  }

  @media only screen and (max-width: 400px) {
    padding: 130px 20px 100px 20px;
  }
`;

const Row = styled.div`
  width: 100%;
  margin: auto;
`;

const ProductCard = styled.div`
  background-color: white;
  height: 400px;
  width: 270px;
  padding-top: 20px;
  border-radius: 20px;
  text-align: center;

  > p {
    line-height: 14px;
    color: #959595;
    font-size: 14px;
  }

  @media only screen and (max-width: 1400px) {
    margin-top: 20px;
  }

  @media only screen and (max-width: 400px) {
    width: 100%;
  }
`;

const ProductFlex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-left: 35px;

  > img {
    text-align: center;
    object-fit: cover;
  }
`;

export default MayAlsoLike;
