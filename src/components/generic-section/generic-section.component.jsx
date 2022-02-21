import React from "react";
import { Row } from "./generic-section.styles";
import GenericItem from "../generic-item/generic-item.component";
import SubTitle from "../sub-title/sub-title.component";

const GenericSection = ({title, data}) => (
  <React.Fragment>
    <SubTitle>{title}</SubTitle>
    <Row>
      {data.length ? data.map((item, key) => <GenericItem key={key} data={item} />): ''}
    </Row>
  </React.Fragment>
);

export default GenericSection;
