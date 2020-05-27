import React from "react";
import { BoxContainer } from "./box.styles";

const Box = (props) => (
  <BoxContainer className={props.styled ? "styled" : "simple"}>
    {props.children}
  </BoxContainer>
);

export default Box;
