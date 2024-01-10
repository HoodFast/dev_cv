import React from 'react';
import styled from "styled-components";
import photoPath from './../../../assets/images/mainPhoto.png'

export const Main = () => {
    return (
        <div>
            <div>
                <h2>I`m Andrey Kuznetsov</h2>
                <h1><h2>Fullstack</h2>Developer</h1>
            </div>
            <Photo src={photoPath} alt=""/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque
                rutrum semper sed suspendisse nunc lectus.</p>
            <button>HIRE ME</button>
        </div>
    );
};

const Photo = styled.img`
  width: 325px;
  height: 459px;
  object-fit: cover;
`