import React from "react";
import { Row } from "./generic-section.styles";
import GenericItem from "../generic-item/generic-item.component";
import SubTitle from "../sub-title/sub-title.component";

const GenericSection = (props) => (
  <React.Fragment>
    <SubTitle>{props.title}</SubTitle>
    <Row>
      {props.data.length > 0
        ? props.data.map((item) => <GenericItem data={item} />)
        : null}
    </Row>
  </React.Fragment>
);

export default GenericSection;
