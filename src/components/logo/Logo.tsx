import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";

export const Logo = () => {
    return (
        <StyledA href="">
            <Icon iconId={"homeSvg"} width={'53px'} height={'53px'} viewBox={'0.5 0 17 17'}/>
        </StyledA>
    );
};

const StyledA = styled.a`
  display: flex;
  align-items: center;
`