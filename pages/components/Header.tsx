import styled, { ThemeContext, DefaultTheme } from "styled-components";
import React, { useState, useContext } from "react";
import { Moon } from "@styled-icons/entypo";

interface HeaderProps {}

interface Active {
  readonly active: boolean;
}

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  position: fixed;
  top: 0;
  left: 0;
  /* background-color: #f6f7f8; */
  background-color: ${(p) => p.theme.primaryColor};
  color: ${(p) => p.theme.bodyFontColor};
  border: 1px solid silver;
  /* -webkit-box-shadow: 0px 2px 5px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 2px 5px -1px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 2px 5px -1px rgba(0, 0, 0, 0.75); */
`;

const MoonIconBtn = styled.button`
  border: 1px solid transparent;
  background-color: transparent;
  outline: none;

  &:hover {
    color: skyblue;
  }
`;

const MoonIcon = styled(Moon)`
  height: 25px;
  width: 25px;
  transform: rotate(90deg);
  cursor: pointer;
  color: ${(p) => p.theme.bodyFontColor};
`;

const MenuItems = styled.ul`
  display: flex;
  list-style-type: none;
  align-items: center;

  & > * {
    margin-right: 20px;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Hamburger = styled.div`
  margin: 1em;
  width: 40px;

  &:after,
  &:before,
  div {
    background-color: ${(p) => p.theme.bodyFontColor};
    border-radius: 3px;
    content: "";
    display: block;
    height: 5px;
    margin: 7px 0;
    transition: all 0.2s ease-in-out;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const ResponsiveMenu = styled.div<Active>`
  width: 100%;
  /* height: 300px; */
  background: ${(p) => p.theme.bodyFontColor};
  position: absolute;
  top: 60px;
  left: 0;
  transition: all 0.3s;

  height: ${(props) => (props.active ? "300px" : "0")};
`;

export const Header: React.FC = ({}) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const { id, setTheme } = useContext(ThemeContext);

  return (
    <React.Fragment>
      <HeaderWrapper>
        <div>
          <h1 data-testid="header-title">Reddit</h1>
        </div>
        <div>
          <Hamburger onClick={() => setActiveMenu(!activeMenu)}>
            <div></div>
          </Hamburger>
          <MenuItems>
            <li>
              <MoonIconBtn onClick={setTheme}>
                <MoonIcon />
              </MoonIconBtn>
            </li>
            <li>renboy94</li>
            <li>Logout</li>
          </MenuItems>
        </div>
      </HeaderWrapper>
      <ResponsiveMenu active={activeMenu}></ResponsiveMenu>
    </React.Fragment>
  );
};

export default Header;
