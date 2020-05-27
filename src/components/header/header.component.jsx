import React from "react";
import { HeaderContainer, Avatar, Paragraph } from "./header.styles";
import Title from "../title/title.component";

const Header = (props) => (
  <HeaderContainer>
    <Avatar src={props.avatar} alt="This is who I am" />
    <Title>{props.name}</Title>
    <Paragraph>{`${props.role} at @${props.company}`}</Paragraph>
    <Paragraph>{`${props.age} years old`}</Paragraph>
    <Paragraph>{props.country}</Paragraph>
  </HeaderContainer>
);

export default Header;
