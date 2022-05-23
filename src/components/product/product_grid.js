import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { productItems } from './product_items';
import ShoppingBagImage from '../../images/cart.png';
import LocationImage from '../../images/location.png';
import UserImage from '../../images/user-default-img.png';
import Badge from '../../images/badge.png';

const ProductGrid = () => {
  return (
    <div>
      <Header>
        <h1>Louis Vuitton</h1>
        <p>Deauville Cloth Handbag</p>
      </Header>
      <Product images={productItems} />
      <ProductInfo />
    </div>
  );
};

const Header = styled.div`
  text-align: center;
  margin-top: 30px;

  > h1 {
    color: #C6AC96;
    font-size: 55px;
    font-family: Montserrat-SemiBold;
  }

  > p {
    font-size: 30px;
    font-family: Montserrat-Regular;
  }
`;

const Product = props => {
  const [currentItem, setCurrentItem] = useState(props.images[0]);

  function slide(index) {
    setCurrentItem(props.images[index]);
  };

  return (
    <div>
      <FlexWrapper>
        <ProductItems>
          {
            props.images.map((item, index) => (
              <img key={index} src={item} alt='Item Image' onClick={() => slide(index)} />
            ))
          }
        </ProductItems>

        <ProductContainer>
          <ProductIcons>
            <div>
              <i className='fa fa-heart-o' style={{ fontSize: '22px' }}></i>
            </div>

            <div>
              <i className='fa fa-send-o' style={{ fontSize: '22px', marginRight: '20px' }}></i>
              <i className='fa fa-share-alt' style={{ fontSize: '22px' }}></i>
              <i className='fa fa-bookmark-o' style={{ fontSize: '22px', marginLeft: '20px' }}></i>
            </div>
          </ProductIcons>

          <ProductImage src={currentItem} alt='Product Image' />
        </ProductContainer>

        <RightSide>
          <PriceFlex>
            <div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <s><ProductPrice>$2100</ProductPrice></s>
                <ProductSale>$1900</ProductSale>
                <ProductDiscount>-70%</ProductDiscount>
              </div>

              <EstimatedPrice>Estimated retail price $2,000</EstimatedPrice>
            </div>

            <div>
              <p style={{ color: '#C49235', fontFamily: 'Montserrat-Regular' }}><i className='fa fa-check'></i> Trusted Seller</p>
            </div>
          </PriceFlex>

          <AuthText>
            <img src={Badge} width='50px' height='60px' />
            <span>
              +15 USD Control and authentication<br/>
              Physical control and authentication<br/>
              by our experts. <a href='#' style={{ color: 'inherit', textDecoration: 'underline' }}>Learn more</a>
            </span>
          </AuthText>
          
          <p style={{ lineHeight: '18px', fontFamily: 'Montserrat-Medium' }}>
            Good Condition<br/>
            Brown Leather<br/>
            Classic LV leather, no scratches
          </p>

          <OrderButton className="btn">Order</OrderButton>

          <OptionFlex>
            <RequestToViewButton className="btn">Request To View</RequestToViewButton>
            <MakeAnOfferButton className="btn">Make An Offer</MakeAnOfferButton>
            <AddToBagButton className="btn"><img src={ShoppingBagImage} width='30px' height='30px'/></AddToBagButton>
          </OptionFlex>

          <div style={{ display: 'flex', marginTop: '20px', fontSize: '18px', fontFamily: 'Montserrat-Medium' }}> {}
            <img src={LocationImage} width='30px' height='30px' />
            <p>Beirut, Lebanon</p>
          </div>
        </RightSide>        
      </FlexWrapper>
    </div>
  );
};

Product.propTypes = {
  items: PropTypes.array.isRequired
};

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 30px 0 30px 30px;

  @media only screen and (max-width: 1185px) {
    flex-wrap: wrap;
  }

  @media only screen and (max-width: 700px) {
    justify-content: center;
  }
`;

const ProductItems = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 20px;

  > img {
    cursor: pointer;
    width: 70px;
    height: 70px;
    object-fit: cover;
  }

  > img:not(:nth-child(1)) {
    margin-top: 20px;
  }

  @media only screen and (max-width: 700px) {
    display: none;
  }
`;

const ProductIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  > div > i {
    cursor: pointer;
  }
`;

const ProductContainer = styled.div`
  margin: 20px 40px 20px 40px;

  @media only screen and (max-width: 700px) {
    margin-left: 0;
  }
`;

const ProductImage = styled.img`
  width: 500px;
  height: 500px;

  @media only screen and (max-width: 700px) {
    width: 450px;
    height: 450px;
  }
`;

const RightSide = styled.div`
  width: 100%;
  background-color: rgba(198, 172, 150, 0.32);
  padding: 50px 100px 50px 100px;

  @media only screen and (max-width: 1185px) {
    width: 600px;
    margin-right: 30px;
  }

  @media only screen and (max-width: 650px) {
    width: 100%;
  }
`;

const PriceFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ProductPrice = styled.p`
  font-size: 22px;
  font-family: Montserrat-Bold;
  margin-right: 7px;
`;

const ProductSale = styled.p`
  color: #DD0000;
  font-size: 18px;
  font-family: Montserrat-Regular;
  margin-right: 7px;
`;

const ProductDiscount = styled.p`
  color: #146900;
  font-size: 10px;
  font-family: Montserrat-Light;
`;

const EstimatedPrice = styled.p`
  color: #777777;
  font-size: 14px;
  font-family: Montserrat-Regular;
`;

const AuthText = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  line-height: 18px;
  font-family: Montserrat-Medium;
`;

const OrderButton = styled.button`
  width: 100%;
  color: white;
  background-color: black;
  margin-top: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 0;
  font-size: 32px;
  font-family: Montserrat-Bold;

  &:hover {
    color: white;
    background-color: #777777;
  }

  @media only screen and (max-width: 1185px) {
    width: 400px;
  }

  @media only screen and (max-width: 600px) {
    width: 250px;
    font-size: 28px;
  }
`;

const OptionFlex = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;

  @media only screen and (max-width: 550px) {
    flex-direction: column;
  }
`;

const RequestToViewButton = styled.button`
  width: 30%;
  background-color: white;
  border-radius: 0;
  margin-right: 20px;
  padding-top: 12px;
  padding-bottom: 15px;
  font-size: 14px;
  font-family: Montserrat-Bold;

  &:hover {
    background-color: rgb(205, 205, 205);
  }

  @media only screen and (max-width: 1185px) {
    width: 120px;
  }

  @media only screen and (max-width: 550px) {
    width: 250px;
  }
`;

const MakeAnOfferButton = styled.button`
  width: 50%;
  background-color: #C6AC96;
  border-radius: 0;
  margin-right: 20px;
  padding-top: 12px;
  padding-bottom: 15px;
  font-family: Montserrat-Bold;

  &:hover {
    background-color: #ecc7a8;
  }

  @media only screen and (max-width: 1185px) {
    width: 120px;
  }

  @media only screen and (max-width: 550px) {
    width: 250px;
    margin-top: 10px;
  }
`;

const AddToBagButton = styled.button`
  width: 20%;
  background-color: white;
  border-radius: 0;

  &:hover {
    background-color: rgb(205, 205, 205);
  }

  @media only screen and (max-width: 1185px) {
    width: 120px;
  }

  @media only screen and (max-width: 550px) {
    width: 250px;
    margin-top: 10px;
  }
`;

const ProductInfo = () => {
  return (
    <ProductInfoContainer>
      <ProductDetails>
        <h3>Details</h3>
        <SpaceBetweenFlex><p style={{ fontFamily: 'Montserrat-Bold' }}>Brand</p><p>Chanel</p></SpaceBetweenFlex>
        <SpaceBetweenFlex><p style={{ fontFamily: 'Montserrat-Bold' }}>Model</p><p>Classic</p></SpaceBetweenFlex>
        <SpaceBetweenFlex><p style={{ fontFamily: 'Montserrat-Bold' }}>Condition</p><p>Good</p></SpaceBetweenFlex>
        <SpaceBetweenFlex><p style={{ fontFamily: 'Montserrat-Bold' }}>Color</p><p>Black</p></SpaceBetweenFlex>
        <SpaceBetweenFlex><p style={{ fontFamily: 'Montserrat-Bold' }}>Size</p><p>Small</p></SpaceBetweenFlex>
        <SpaceBetweenFlex><p style={{ fontFamily: 'Montserrat-Bold' }}>Dimensions</p><p>28 * 18 * 5 cm</p></SpaceBetweenFlex>
      </ProductDetails>

      <ProductSeller>
        <h3>Seller</h3>
        <SellerInfoFlex>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <UserDefaultImage src={UserImage} />
            <UserInfo>
              <p style={{ fontFamily: 'Montserrat-Medium' }}>
                <span style={{ color: '#C49235', fontFamily: 'Montserrat-Regular' }}><i className='fa fa-check'></i>Trusted Seller</span><br/>
                @username0000012222
              </p>
            </UserInfo>
          </div>

          <SellerBtns>
            <UnfollowButton className='btn'>Unfollow</UnfollowButton>
            <ContactButton className='btn'>Contact</ContactButton>
          </SellerBtns>
        </SellerInfoFlex>

        <SellerReviews>
          <h3>Seller Reviews</h3>
          <SpaceBetweenFlex>
            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px', alignItems: 'center' }}>
              <UserDefaultImage src={UserImage}/>
              <p style={{ fontFamily: 'Montserrat-Medium' }}>@username0000012222</p>
            </div>

            <div>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
            </div>
          </SpaceBetweenFlex>
          <SpaceBetweenFlex>
            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px', alignItems: 'center' }}>
              <UserDefaultImage src={UserImage} />
              <p style={{ fontFamily: 'Montserrat-Medium' }}>@username0000012222</p>
            </div>

            <div>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
            </div>
          </SpaceBetweenFlex>
          <SeeMoreLink href='#'>See More</SeeMoreLink>
        </SellerReviews>
      </ProductSeller>

      <ReturnContainer>
        <a href='#'>
          <FlexWrapper2 style={{ marginTop: '40px' }}>
            <div style={{ marginLeft: '20px', fontSize: '18px', fontFamily: 'Montserrat-Light' }}>
              <i className='fa fa-shield'></i>
              <span style={{ marginLeft: '15px' }}>Quality Control</span>
            </div>
            <i className='fa fa-angle-right' style={{ fontSize: '30px', marginRight: '30px' }}></i>
          </FlexWrapper2>
        </a>

        <a href='#'>
          <FlexWrapper2>
            <div style={{ marginLeft: '20px', fontSize: '18px', fontFamily: 'Montserrat-Light' }}>
              <i className='fa fa-truck'></i>
              <span style={{ marginLeft: '15px' }}>Shipping</span>
            </div>
            <i className='fa fa-angle-right' style={{ fontSize: '30px', marginRight: '30px' }}></i>
          </FlexWrapper2>
        </a>

        <a href='#'>
          <FlexWrapper2>
            <div style={{ marginLeft: '20px', fontSize: '18px', fontFamily: 'Montserrat-Light' }}>
              <i className='fa fa-undo'></i>
              <span style={{ marginLeft: '15px' }}>Returns</span>
            </div>
            <i className='fa fa-angle-right' style={{ fontSize: '30px', marginRight: '30px' }}></i>
          </FlexWrapper2>
        </a>
      </ReturnContainer>

      <CommentContainer>
        <p>Leave a comment for the seller </p>
        <CommentInput className='form-control' placeholder='Type here...' />
        <CommentButton className='btn'>Comment</CommentButton>
      </CommentContainer>
    </ProductInfoContainer>
  );
};

const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 40px;
  padding: 50px;

  @media only screen and (max-width: 1115px) {
    flex-direction: column;
    padding: 40px;
  }

  > div > h3, > div > div > h3 {
    font-family: Montserrat-Bold;
  }
`;

const SpaceBetweenFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SeeMoreLink = styled.a`
  float: right;
  text-decoration: underline;
  font-family: Montserrat-Medium;
`;

const SellerInfoFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 1115px) {
    width: 400px;
  }
`;

const UserDefaultImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
`;

const ProductDetails = styled.div`
  width: 35%;
  font-family: Montserrat-Medium;

  @media only screen and (max-width: 1115px) {
    width: 400px;
  }
`;

const ProductSeller = styled.div`
  width: 60%;
  margin-left: 50px;

  @media only screen and (max-width: 1115px) {
    width: 400px;
    margin-left: 0;
    margin-top: 10px;
  }
`;

const SellerReviews = styled.div`
  width: 50%;
  margin-top: 20px;

  @media only screen and (max-width: 1115px) {
    width: 400px;
  }
`;

const ReturnContainer = styled.div`
  width: 35%;

  > a {
    color: inherit;
    text-decoration: none;
  }
`;

const SellerBtns = styled.div`
  @media only screen and (max-width: 600px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 50px;
  }
`;

const UnfollowButton = styled.button`
  height: 28px;
  width: 100px;
  color: white;
  background-color: #C6AC96;
  text-align: center;
  margin-right: 10px;
  padding: 0;
  font-size: 14px;
  font-family: Montserrat-Regular;

  @media only screen and (max-width: 600px) {
    margin-top: 5px;
  }
`;

const ContactButton = styled.button`
  height: 28px;
  width: 100px;
  color: white;
  background-color: black;
  text-align: center;
  padding: 0;
  font-size: 14px;
  font-family: Montserrat-Regular;

  &:hover {
    color: #C6AC96;
  }

  @media only screen and (max-width: 600px) {
    margin-top: 5px;
  }
`;

const FlexWrapper2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #EAEAEA;
  border-radius: 7px;
  margin-top: 20px;

  @media only screen and (max-width: 1115px) {
    width: 400px;
  }
`;

const CommentContainer = styled.div`
  width: 55%;
  background-color: #EAEAEA;
  margin: 30px 0 0 60px;
  padding: 20px;
  font-family: Montserrat-Medium;

  @media only screen and (max-width: 1115px) {
    margin-left: 0;
    width: 400px;
  }
`;

const CommentInput = styled.textarea`
  height: 80px;
  padding-bottom: 30px;
`;

const CommentButton = styled.button`
  height: 30px;
  width: 100px;
  float: right;
  text-align: center;
  background-color: white;
  margin-top: 10px;
  padding: 0;
`;

export default ProductGrid;
