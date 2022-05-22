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
      <div className='row'>
        <div className='col'>
          <ProductCard>
            <ProductFlex>
              <img src={ClockImage} width='160px' height='200px' />
              <div>
                <i className='fa fa-heart' style={{ fontSize: '22px', marginRight: '5px' }}></i>
                <i className='fa fa-bookmark-o' style={{ fontSize: '22px' }}></i>
              </div>
            </ProductFlex>
            <br/>
            <p>
              Rolex<br/>
              <span>Oyster-perpetual<br/> 11,700 USD</span>
            </p>
            <p><img src={LocationImage} width='20px' height='20px' />Beirut</p>
          </ProductCard>
        </div>

        <div className='col'>
          <ProductCard>
            <ProductFlex>
              <img src={Image} width='160px' height='200px' />
              <div>
                <i className='fa fa-heart' style={{ fontSize: '22px', marginRight: '5px' }}></i>
                <i className='fa fa-bookmark-o' style={{ fontSize: '22px' }}></i>
              </div>
            </ProductFlex>
            <br/>
            <p>
              Hermes<br/>
              <span>
                Yellow Leather Belt<br/> 2,100 USD<br/>
              </span>
            </p>
            <p><img src={LocationImage} width='20px' height='20px' />Beirut</p>
          </ProductCard>
        </div>

        <div className='col'>
          <ProductCard>
            <ProductFlex>
              <img src={ClockImage1} width='160px' height='200px' />
              <div>
                <i className='fa fa-heart' style={{ fontSize: '22px', marginRight: '5px' }}></i>
                <i className='fa fa-bookmark-o' style={{ fontSize: '22px' }}></i>
              </div>
            </ProductFlex>
            <br/>
            <p>
              Audemars Piguet<br/>
              <span>
                ROYAL OAK YELLOW<br/> 180,000 USD<br/>
              </span>
            </p>
            <p><img src={LocationImage} width='20px' height='20px' />Dubai</p>
          </ProductCard>
        </div>

        <div className='col'>
          <ProductCard>
            <ProductFlex>
              <img src={WalletImage} width='160px' height='200px' />
              <div>
                <i className='fa fa-heart' style={{ fontSize: '22px', marginRight: '5px' }}></i>
                <i className='fa fa-bookmark-o' style={{ fontSize: '22px' }}></i>
              </div>
            </ProductFlex>
            <br/>
            <p>
              Gucci<br/>
              <span>Beige Canvas Wallet<br/> 370 USD</span>
            </p>
            <p><img src={LocationImage} width='20px' height='20px' />Beirut</p>
          </ProductCard>
        </div>
      </div>
    </ProductContainer>
  );
};

const ProductContainer = styled.div`
  background-color: #F9F9F9;
  padding: 130px 100px 100px 100px;
  margin-top: 50px;
`;

const ProductCard = styled.div`
  background-color: white;
  height: 370px;
  width: 270px;
  padding-top: 20px;
  border-radius: 20px;
  text-align: center;

  > p {
    line-height: 25px;
  }

  @media only screen and (max-width: 1400px) {
    margin-top: 20px;
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
