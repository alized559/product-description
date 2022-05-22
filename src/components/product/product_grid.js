import React from 'react';
import styled from 'styled-components';
import ProductItem1 from '../../images/product/product1/product-item1.png';
import ProductItem2 from '../../images/product/product1/product-item2.png';
import ProductItem3 from '../../images/product/product1/product-item3.png';
import ProductItem4 from '../../images/product/product1/product-item4.png';
import ProductItem5 from '../../images/product/product1/product-item5.png';
import ProductItem6 from '../../images/product/product1/product-item6.png';
import ShoppingBagImage from '../../images/cart.png';
import LocationImage from '../../images/location.png';
import UserDefaultImage from '../../images/user-default-img.png';

const ProductGrid = () => {
  return (
    <div>
      <Header>
        <h1 style={{ fontSize: '60px' }}>Louis Vuitton</h1>
        <p style={{ fontSize: '32px' }}>Deauville Cloth Handbag</p>
      </Header>
      <Product />
      <ProductInfo />
    </div>
  );
};

const Header = styled.div`
  text-align: center;
  margin-top: 30px;

  > h1 {
    color: #C6AC96;
  }
`;

const Product = () => {
  return (
    <div>
      <FlexWrapper>
        <ProductItems>
          <img src={ProductItem1} />
          <img src={ProductItem2} />
          <img src={ProductItem3} />
          <img src={ProductItem4} />
          <img src={ProductItem5} />
          <img src={ProductItem6} />
        </ProductItems>

        <ProductContainer>
          <ProductIcons>
            <div>
              <i className='fa fa-heart' style={{ fontSize: '22px' }}></i>
            </div>

            <div>
              <i className='fa fa-send-o' style={{ fontSize: '22px', marginRight: '20px' }}></i>
              <i className='fa fa-share-alt' style={{ fontSize: '22px' }}></i>
              <i className='fa fa-bookmark-o' style={{ fontSize: '22px', marginLeft: '20px' }}></i>
            </div>
          </ProductIcons>

          <ProductImage src={ProductItem1} />
        </ProductContainer>

        <RightSide>
          <PriceFlex>
            <div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <s><p style={{ fontWeight: 'bold', fontSize: '22px', marginRight: '7px' }}>$2100</p></s>
                <p style={{ fontSize: '18px', marginRight: '7px', color: '#DD0000' }}>$1900</p>
                <p style={{ fontSize: '12px', color: '#146900' }}>-70%</p>
              </div>

              <p style={{ color: '#777777', fontSize: '16px' }}>Estimated retail price $2,000</p>
            </div>

            <div>
              <p style={{ color: '#C49235' }}><i className='fa fa-check'></i> Trusted Seller</p>
            </div>
          </PriceFlex>

          <p style={{ lineHeight: '18px' }}>
            <i className='fa fa-id-badge' style={{ height: '100%' }}></i>
            +15 USD Control and authentication<br/>
            Physical control and authentication<br/>
            by our experts. <a href='#' style={{ color: 'inherit', textDecoration: 'underline' }}>Learn more</a>
          </p>
          
          <p style={{ lineHeight: '18px' }}>
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

          <div style={{ display: 'flex', marginTop: '20px', fontSize: '20px' }}>
            <img src={LocationImage} width='30px' height='30px' />
            <p>Beirut, Lebanon</p>
          </div>
        </RightSide>        
      </FlexWrapper>
    </div>
  );
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
  background-color: rgba(198, 172, 150, 0.32);
  padding: 50px 100px 50px 100px;
  width: 100%;

  @media only screen and (max-width: 1185px) {
    margin-right: 30px;
    width: 600px;
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

const OrderButton = styled.button`
  width: 100%;
  background-color: black;
  margin-top: 20px;
  border-radius: 0;
  color: white;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 35px;
  font-weight: bold;

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
  display: flex;
  margin-top: 20px;
  width: 100%;

  @media only screen and (max-width: 550px) {
    flex-direction: column;
  }
`;

const RequestToViewButton = styled.button`
  width: 30%;
  border-radius: 0;
  font-weight: bold;
  background-color: white;
  padding-top: 12px;
  padding-bottom: 15px;
  margin-right: 20px;

  @media only screen and (max-width: 1185px) {
    width: 120px;
  }

  @media only screen and (max-width: 550px) {
    width: 250px;
  }
`;

const MakeAnOfferButton = styled.button`
  width: 50%;
  border-radius: 0;
  font-weight: bold;
  background-color: #C6AC96;
  padding-top: 12px;
  padding-bottom: 15px;
  margin-right: 20px;

  @media only screen and (max-width: 1185px) {
    width: 120px;
  }

  @media only screen and (max-width: 550px) {
    width: 250px;
    margin-top: 10px;
  }
`;

const AddToBagButton = styled.button`
  border-radius: 0;
  width: 20%;
  background-color: white;

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
        <SpaceBetweenFlex><p style={{ fontWeight: 'bold' }}>Brand</p><p>Chanel</p></SpaceBetweenFlex>
        <SpaceBetweenFlex><p style={{ fontWeight: 'bold' }}>Model</p><p>Classic</p></SpaceBetweenFlex>
        <SpaceBetweenFlex><p style={{ fontWeight: 'bold' }}>Condition</p><p>Good</p></SpaceBetweenFlex>
        <SpaceBetweenFlex><p style={{ fontWeight: 'bold' }}>Color</p><p>Black</p></SpaceBetweenFlex>
        <SpaceBetweenFlex><p style={{ fontWeight: 'bold' }}>Size</p><p>Small</p></SpaceBetweenFlex>
        <SpaceBetweenFlex><p style={{ fontWeight: 'bold' }}>Dimensions</p><p>28 * 18 * 5 cm</p></SpaceBetweenFlex>
      </ProductDetails>

      <ProductSeller>
        <h3>Seller</h3>
        <SellerInfoFlex>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <img src={UserDefaultImage} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px', justifyContent: 'center' }}>
              <p>
                <span style={{ color: '#C49235' }}><i className='fa fa-check'></i>Trusted Seller</span><br/>
                @username0000012222
              </p>
            </div>
          </div>

          <SellerBtns>
            <UnfollowButton className='btn'>Unfollow</UnfollowButton>
            <ContactButton className='btn'>Contact</ContactButton>
          </SellerBtns>
        </SellerInfoFlex>

        <div style={{ marginTop: '20px', width: '50%' }}>
          <h3>Seller Reviews</h3>
          <SpaceBetweenFlex>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <img src={UserDefaultImage} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
              <p>@username0000012222</p>
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
              <img src={UserDefaultImage} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
              <p>@username0000012222</p>
            </div>

            <div>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
            </div>
          </SpaceBetweenFlex>
          <a href='#' style={{ float: 'right', textDecoration: 'underline' }}>See More</a>
        </div>
      </ProductSeller>

      <div style={{ width: '35%', marginTop: '40px' }}>
        <FlexWrapper2>
          <p style={{ marginLeft: '20px', fontSize: '18px' }}>
            <i className='fa fa-shield'></i>
            <span style={{ marginLeft: '15px' }}>Quality Control</span>
          </p>
          <i className='fa fa-angle-right' style={{ fontSize: '30px', marginRight: '30px' }}></i>
        </FlexWrapper2>

        <FlexWrapper2 style={{ marginTop: '20px' }}>
          <p style={{ marginLeft: '20px' }}>
            <i className='fa fa-truck'></i>
            <span style={{ marginLeft: '15px' }}>Shipping</span>
          </p>
          <i className='fa fa-angle-right' style={{ fontSize: '30px', marginRight: '30px' }}></i>
        </FlexWrapper2>

        <FlexWrapper2 style={{ marginTop: '20px' }}>
          <p style={{ marginLeft: '20px' }}>
            <i className='fa fa-undo'></i>
            <span style={{ marginLeft: '15px' }}>Returns</span>
          </p>
          <i className='fa fa-angle-right' style={{ fontSize: '30px', marginRight: '30px' }}></i>
        </FlexWrapper2>
      </div>

      <CommentContainer>
        <p>Leave a comment for the seller </p>
        <CommentInput className='form-control' placeholder='Type here...' />
        <CommentButton className='btn'>Comment</CommentButton>
      </CommentContainer>
    </ProductInfoContainer>
  );
};

const ProductInfoContainer = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 40px;

  @media only screen and (max-width: 1115px) {
    flex-direction: column;
  }
`;

const SpaceBetweenFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SellerInfoFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 1115px) {
    width: 500px;
  }
`;

const ProductDetails = styled.div`
  width: 35%;

  @media only screen and (max-width: 1115px) {
    width: 380px;
  }
`;

const ProductSeller = styled.div`
  margin-left: 50px;
  width: 60%;

  @media only screen and (max-width: 1115px) {
    margin-left: 0;
    margin-top: 10px;
    width: 650px;
  }
`;

const SellerBtns = styled.div`
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 50px;
  }
`;

const UnfollowButton = styled.button`
  background-color: #C6AC96;
  color: white;
  height: 30px;
  width: 100px;
  text-align: center;
  padding: 0;
  margin-right: 10px;

  @media only screen and (max-width: 600px) {
    margin-top: 5px;
  }
`;

const ContactButton = styled.button`
  background-color: black;
  color: white;
  height: 30px;
  width: 100px;
  text-align: center;
  padding: 0;

  &:hover {
    color: white;
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

  @media only screen and (max-width: 1115px) {
    width: 350px;
  }
`;

const CommentContainer = styled.div`
  width: 55%;
  margin: 30px 0 0 60px;
  background-color: #EAEAEA;
  padding: 20px;

  @media only screen and (max-width: 1115px) {
    margin-left: 0;
    width: 350px;
  }
`;

const CommentInput = styled.input`
  height: 80px;
  padding-bottom: 30px;
`;

const CommentButton = styled.button`
  height: 30px;
  width: 100px;
  float: right;
  text-align: center;
  padding: 0;
  background-color: white;
  margin-top: 10px;
`;

export default ProductGrid;
