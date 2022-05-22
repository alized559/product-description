import React from 'react';
import styled from 'styled-components';

const BottomNavbar = () => {
  return (
    <NavbarList>
      <NavbarItem><a href='#'>New</a></NavbarItem>
      <NavbarItem><a href='#'>Brands</a></NavbarItem>
      <NavbarItem><a href='#'>Women</a></NavbarItem>
      <NavbarItem><a href='#'>Men</a></NavbarItem>
      <NavbarItem><a href='#'>Trending</a></NavbarItem>
      <NavbarItem><a href='#'>Bags</a></NavbarItem>
      <NavbarItem><a href='#'>Watches</a></NavbarItem>
      <NavbarItem><a href='#'>Shoes</a></NavbarItem>
      <NavbarItem><a href='#'>Top Sellers</a></NavbarItem>
      <NavbarItem><a href='#'>Become a Seller</a></NavbarItem>
    </NavbarList>
  );
};

const NavbarList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #F5F5F5;
  padding: 30px;
  font-family: Inter-Regular;
`;

const NavbarItem = styled.div`
  > a {
    text-decoration: none;
    color: black;
    font-size: 18px;

    &:hover {
      color: #C6AC96;
      transition: 0.3s;
    }
  }
`;

export default BottomNavbar;
