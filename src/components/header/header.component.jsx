import React from "react";
import { HeaderContainer, Avatar, Paragraph, Content, Row } from "./header.styles";
import Title from "../title/title.component";

const Header = (props) => (
  <HeaderContainer>
    <Avatar src={props.avatar} alt="This is who I am" />
    <Content>
      <Row>
        <Title>{props.name}</Title>
        <Paragraph>{props.role} at <strong>@{props.company}</strong></Paragraph>
        <Paragraph>{props.age} yo</Paragraph>
        <Paragraph>{props.country}</Paragraph>
      </Row>
      <Row>
        <Paragraph>
          <a href={props.openSea} target="_blank" rel="noopener noreferrer">OpenSea</a>
          <a href={props.linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </Paragraph>
      </Row>
    </Content>
  </HeaderContainer>
);

export default Header;
