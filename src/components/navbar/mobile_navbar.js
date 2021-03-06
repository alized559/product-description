import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import Logo from '../../images/logo.png';
import ShoppingBagImage from '../../images/cart.png';

const MobileNavbar = () => {
  const navbar = useRef(null);
  const search = useRef(null);

  useEffect(() => {
    search.current.style.display = 'none';
  }, []);
  
  const openNav = () => {
    navbar.current.style.width = '250px';
  };

  const closeNav = () => {
    navbar.current.style.width = '';
  };

  const toggleSearch = () => {
    if (search.current.style.display == 'block') {
      search.current.style.display = 'none';
    } else {
      search.current.style.display = 'block';
    }
  };
  
  return (
    <div style={{ marginBottom: '10px' }}>
      <div>
        <SideNav ref={navbar}>
          <Closebtn onClick={closeNav}>&times;</Closebtn>
          <a href='#' onClick={closeNav}>New</a>
          <a href='#' onClick={closeNav}>Brands</a>
          <a href='#' onClick={closeNav}>Women</a>
          <a href='#' onClick={closeNav}>Men</a>
          <a href='#' onClick={closeNav}>Trending</a>
          <a href='#' onClick={closeNav}>Bags</a>
          <a href='#' onClick={closeNav}>Watches</a>
          <a href='#' onClick={closeNav}>Shoes</a>
          <a href='#' onClick={closeNav}>Top Sellers</a>
          <a href='#' onClick={closeNav}>Become a Seller</a>

          <div style={{ marginTop: '30px', marginBottom: '30px' }}>
            <a href='#' style={{ borderBottom: '0', textDecoration: 'none' }}>
              <SellButton className="btn">Sell An Item</SellButton>
            </a>
            <MyAccount>My Account</MyAccount>
            <a href='#' style={{ borderBottom: '0', textDecoration: 'none' }}>
              <Signinbtn className='btn black'>Sign in</Signinbtn>
            </a>
            <a href='#' style={{ borderBottom: '0', paddingTop: '0', textDecoration: 'none' }}>
              <Signupbtn className='btn black'>Sign up</Signupbtn>
            </a>
          </div>
        </SideNav>

        <TopNavbar>
          <span style={{ fontSize: '24px', cursor: 'pointer' }} onClick={openNav}>&#9776;</span>
          <div>
            <a href='#'><img src={Logo} width='170px' height='40px' /></a>
          </div>
          <RightSide>
            <i className='fa fa-search' aria onClick={toggleSearch}></i>
            <a href="#" style={{ textDecoration: 'none' }}><img src={ShoppingBagImage} width='30px' height='30px'/></a>
          </RightSide>
        </TopNavbar>

        <SearchContainer ref={search}>
          <SearchInput placeholder='Search by brand, category, item...' />
        </SearchContainer>
      </div>
    </div>
  );
};

const SideNav = styled.div`
  width: 0;
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  background-color: white;
  transition: 0.2s;
  padding-top: 60px;
  box-shadow: 0 1px 5px rgb(93, 93, 93);
  font-family: Montserrat-Medium;

  > a:not(:first-child) {
    padding: 8px 8px 8px 20px;
    text-decoration: none;
    font-size: 18px;
    color: black;
    display: block;
    border-bottom: 1px solid rgb(211, 211, 211);
    cursor: pointer;

    &:hover {
      transition: 0.5s;
      background-color: rgb(211, 211, 211);
    }
  }
`;

const Closebtn = styled.a`
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
  border: none;
  cursor: pointer;
  color: black;

  &:hover {
    text-decoration: none;
    color: black;
    color: rgb(119, 119, 119);
    transition: 0.5s;
  }
`;

const MyAccount = styled.p`
  text-align: center;
  font-family: Montserrat-Bold;
  text-align: center;
  margin-top: 20px;
`;

const Signupbtn = styled.button`
  width: 150px;
  border: 1px solid black;
  display: block;
  margin: 0 auto;
  color: black;
  font-family: Montserrat-Bold;

  &:hover {
    background-color: rgb(205, 205, 205);
    border-color: rgb(119, 119, 119);
  }
`;

const Signinbtn = styled.button`
  width: 150px;
  background-color: black;
  color: white !important;
  display: block;
  margin: 0 auto;
  margin-bottom: 5px;
  font-family: Montserrat-Bold;

  &:hover {
    background-color: rgb(69, 69, 69);
  }
`;

const SellButton = styled.button`
  width: 150px;
  background-color: #C6AC96;
  color: black !important;
  font-family: Montserrat-Bold;
  display: block;
  margin: 0 auto;
  margin-bottom: 5px;

  &:hover {
    background-color: #ecc7a8;
  }
`;

const TopNavbar = styled.div`
  display: grid;
  grid-template-columns: 1fr repeat(1, auto) 1fr;
  align-items: center;
  padding: 10px;
  box-shadow: 0 1px 5px rgb(93, 93, 93);

  > span {
    margin-right: auto;
  }
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: auto;

  > i {
    margin-right: 10px;
    font-size: 22px;
    cursor: pointer;
  }
`;

const SearchContainer = styled.div`
  width: 100%;
  height: 40px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 3px;
  border: 1px solid #E3E3E3;
  margin: 5px 0 5px 0;
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

export default MobileNavbar;
