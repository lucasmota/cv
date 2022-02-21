import React from "react";
import { SkillsRow } from "./skills.styles";
import skills from "../../static/skills.json";
import SkillItem from "../skill-item/skill-item.component";
import SubTitle from "../sub-title/sub-title.component";

const Skills = (props) => (
  <React.Fragment>
    <SubTitle>Skills</SubTitle>
    <SkillsRow>
      {skills.map((item, key) => (
        <SkillItem key={key} skill={item} />
      ))}
    </SkillsRow>
  </React.Fragment>
);

export default Skills;
