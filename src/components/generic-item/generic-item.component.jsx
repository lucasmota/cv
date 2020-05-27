import React from "react";
import {
  GenericItemBox,
  Role,
  Place,
  Period,
  Description,
} from "./generic-item.styles";

const GenericItem = (props) => (
  <GenericItemBox>
    {props.data.role ? <Role>{props.data.role}</Role> : null}
    {props.data.place ? <Place>{props.data.place}</Place> : null}
    {props.data.from ? (
      <Period>
        {props.data.from}
        {props.data.current ? " - Current" : (props.data.to ? ` to ${props.data.to}` : null)}
      </Period>
    ) : null}
    {props.data.description ? (
      <Description dangerouslySetInnerHTML={{ __html: props.data.description }} />
    ) : null}
  </GenericItemBox>
);

export default GenericItem;
