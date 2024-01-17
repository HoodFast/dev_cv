import React, {FC} from 'react';
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";
import blackWhite from '../../../assets/images/black-and-white-cards.webp'

type CardType = {
    img: string
    title: string
    description: string
    link: string
}


const blogItems: CardType[] = [
    {
    img: blackWhite,
    title: 'Crazy Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna' ,
    link: 'https://www.google.ru/'
},
    {
    img: blackWhite,
    title: 'Crazy Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna' ,
    link: 'https://www.google.ru/'
},
    {
    img: blackWhite,
    title: 'Crazy Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna' ,
    link: 'https://www.google.ru/'
},
    {
    img: blackWhite,
    title: 'Crazy Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna' ,
    link: 'https://www.google.ru/'
},
    {
    img: blackWhite,
    title: 'Crazy Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna' ,
    link: 'https://www.google.ru/'
},
    {
    img: blackWhite,
    title: 'Crazy Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna' ,
    link: 'https://www.google.ru/'
},
]
export const Blogs = () => {

    const blogsList = blogItems.map(i => {
        return (
            <BlogsCard item={i}/>
        )
    })

    return (
        <FlexWrapper style={{'backgroundColor':'#d5bcec'}} direction={'column'} align={'center'}>
            <SectionTitle
                description='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit. lorem ipsum'>
                Blogs
            </SectionTitle>
            <FlexWrapper wrap={'wrap'} justify={'center'} gap={'20px'} >
                {blogsList}
            </FlexWrapper>


        </FlexWrapper>
    );
};

type BlogsCardProps = {
    item: CardType
}
const BlogsCard: FC<BlogsCardProps> = (props) => {
    return (
        <CardContainer>
            <StyledImg src={props.item.img} alt="картинка"/>
            <TextContainer>
            <StyledTitle>{props.item.title}</StyledTitle>
            <StyledDescription>{props.item.description}</StyledDescription>
            {/*<StyledLink rel="stylesheet" href={props.item.link}>Lear More</StyledLink>*/}
            <StyledLink href={props.item.link}>Learn more</StyledLink>
            </TextContainer>
        </CardContainer>
    )
}

const CardContainer = styled.div`
  width: 310px;
  height: 474px;
  background-color: white;
  display: flex;
  flex-direction: column;
  
`

const StyledImg = styled.img`
  width: 100%;
`

const StyledLink = styled.a`
  color: #FFB400;
`

const TextContainer = styled.div`
margin: 25px;
`

const StyledTitle = styled.h3`
margin: 0;
`

const StyledDescription = styled.p`
margin: 5px 0 5px;
`