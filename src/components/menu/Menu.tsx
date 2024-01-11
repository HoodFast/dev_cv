import React, {FC} from 'react';
import styled from "styled-components";

type MenuPropsType = {
    menuItems: string[]
}

export const Menu: FC<MenuPropsType> = (props) => {

    let menuData = props.menuItems.map((i, index) => {
        return (
            <li key={index}><a href="">{i}</a></li>
        )
    })
    return (
        <StyledMenu>
            <ul>
                {menuData}
            </ul>
        </StyledMenu>
    );
};


const StyledMenu = styled.nav`
  ul {
    display: flex;
    align-items: center;
    gap: 50px;
  }
`
