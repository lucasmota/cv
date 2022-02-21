import React from "react";
import {
  GenericItemBox,
  Role,
  Place,
  Period,
  Description,
} from "./generic-item.styles";

const GenericItem = ({data: {role, link, place, from, current, to, description}}) => (
  <GenericItemBox>
    {role && <Role>{role}</Role>}
    {place && (
      <Place>
        {link ? 
          <a href={link} target="_blank" rel="noopener noreferrer">
            {place} <span role="img" aria-label="link emoji">🔗</span>
          </a>
        : place}
      </Place>
    )}
    {from && (
      <Period>
        {from}
        {current ? " - Current" : (to ? ` to ${to}` : null)}
      </Period>
    )}
    {description && (
      <Description dangerouslySetInnerHTML={{ __html: description }} />
    )}
  </GenericItemBox>
);

export default GenericItem;
