import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  background: #333;
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  list-style: none;
`;
const MenuItem = styled.li`
  padding: 1em;
`;
const MenuLink = styled(Link)`
  text-decoration: none;
  text-transform: capitalize;
  color: #fff;
`;

const Navigation = () => {
  return (
    <nav>
      <Menu>
        <MenuItem>
          <MenuLink to="/">Home </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/user">User </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/contact">Contact</MenuLink>
        </MenuItem>
      </Menu>
    </nav>
  );
};
export default Navigation;
