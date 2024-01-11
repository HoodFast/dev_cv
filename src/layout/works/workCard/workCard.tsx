import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const WorkCard = () => {
    return (
        <FlexWrapper justify='center'  gap='50px'>
            <StyledInfo>
                <h2>
                    University of Toronto
                </h2>
                <span>Student</span><span>Jan 1016 - Dec 2021</span>
            </StyledInfo>
            <StyledDescription>
                <h2>
                    Certificate of web training
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas
                    id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus
                    etiam et pellentesque. Molestie risus enim neque eget dui.
                </p>
            </StyledDescription>
        </FlexWrapper>
    );
};


const StyledInfo = styled.div`

  gap: 20px;
  margin: 20px;

  h2 {
    //margin: 20px;
  }

  span {
    gap: 15px;
  }
`

const StyledDescription = styled.div`
width: 60%;
`