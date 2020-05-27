import React from "react";
import { SkillItemBox, Name, Experience } from "./skill-item.styles";

const Skill = (props) => (
  <SkillItemBox>
    <Name>{props.skill.name}</Name>
    <Experience width={props.skill.xp} star={props.skill.star} />
  </SkillItemBox>
);

export default Skill;
