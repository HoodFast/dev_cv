import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";

export const Logo = () => {
    return (
        <StyledA href="">
            <Icon iconId={"homeSvg"} width={'53px'} height={'53px'} />
        </StyledA>
    );
};

const StyledA = styled.a`
  display: flex;
  align-items: center;
`