import React, {FC} from 'react';
import iconsSprite from '../../assets/images/icons/icons-sprite.svg'
import styled from "styled-components";

type iconPropsType = {
    iconId:string
    width?:string
    height?:string
    viewBox?:string
}

export const Icon:FC<iconPropsType> = (props) => {
    return (
        <StyledContain>
            <StyledSvg width={props.width || "30"} height={props.height || "30"} viewBox={props.viewBox || "0 0 17 17"} fill="none" xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
            </StyledSvg>
        </StyledContain>
    );
};

const StyledContain = styled.div`
background-color: transparent;
`

const StyledSvg = styled.svg`
  display: block;
`