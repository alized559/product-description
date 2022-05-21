import React from 'react';
import styled from 'styled-components';
import Logo from '../../images/logo.png';
import ShoppingBagImage from '../../images/cart.png';

const TopNavbar = () => {
  return (
    <NavbarContainer>
      <SearchContainer>
        <i className='fa fa-search' aria></i>
        <SearchInput placeholder='Search by brand, category, item...' />
      </SearchContainer>

      <img src={Logo} width='330px' height='70px' />

      <RightSide>
        <SellButton className="btn">Sell An Item</SellButton>
        <button className="btn" style={{ marginLeft: '10px' }}>Sign In</button>
        <button className="btn" style={{ marginRight: '5px' }}>Sign Up</button>
        <img src={ShoppingBagImage} width='30px' height='30px'/>
      </RightSide>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 50px 40px 50px 40px;
  align-items: center;
`;

const SearchContainer = styled.div`
  width: 350px;
  height: 40px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 10px 10px 10px 20px;
  border: 1px solid #E3E3E3;
`;

const SearchInput = styled.input`
  height: 30px;
  width: 100%;
  padding-left: 10px;
  border: none;
  outline: none;
  font-size: 14px;
  color: #808080;
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SellButton = styled.button`
  background-color: #C6AC96;
  font-weight: bold;
  padding-left: 15px;
  padding-right: 15px;
`;

export default TopNavbar;
