import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";


const menuItems=['Home','Skills',"Works","Contact"]
export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu menuItems={menuItems}/>
        </StyledHeader>
    );
};


const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0 100px 0 100px;
  background-color: #a1c9a1;
`