import React from 'react';
import styled from 'styled-components';

const BottomFooter = () => {
  return (
    <FooterContainer>
      <p>Except for Brand Partner Items Libas LLC has no association and /or affiliation with the brands whoese items are<br/>
        offered for sale on its website/App.<br/>Except for Brand Approved items the authentication is performed independently by Libas LLC.
      </p>
      <PaymentFlex>
        <i className='fa fa-cc-mastercard'></i>
        <i className='fa fa-cc-visa'></i>
        <i className='fa fa-cc-amex'></i>
      </PaymentFlex>
      <CopyRight>
        <p>Lebanon - UAE - USA - Canada</p>
        <p>2022 - Libas LLC ©</p>
      </CopyRight>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  padding: 20px 100px 20px 100px;
  color: #909090;
  line-height: 20px;
  font-family: Montserrat-Medium;

  @media only screen and (max-width: 735px) {
    padding: 30px;
  }
`;

const PaymentFlex = styled.div`
  display: flex;
  flex-direction: row;

  > i {
    padding-right: 10px;
    color: black;
    font-size: 30px;
  }
`;

const CopyRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;

  @media only screen and (max-width: 550px) {
    font-size: 14px;
  }
`;

export default BottomFooter;
