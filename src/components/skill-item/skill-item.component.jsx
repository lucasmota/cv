import React from "react";
import { SkillItemBox, Name, Experience } from "./skill-item.styles";

const Skill = ({skill}) => (
  <SkillItemBox>
    <Name>{skill.name}</Name>
    <Experience width={skill.xp} star={skill.star} />
  </SkillItemBox>
);

export default Skill;
