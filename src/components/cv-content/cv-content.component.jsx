import React from "react";
import { CvContentContainer } from "./cv-content.styles";
import Header from "../header/header.component";
import Box from "../box/box.component";
import Skills from "../skills/skills.component";
import GenericSection from "../generic-section/generic-section.component";

import intro from "../../static/intro.json";
import experiences from "../../static/experiences.json";
import education from "../../static/education.json";

import * as Avatar from "../../assets/myself.png";

class CvContent extends React.Component {
  render() {
    return (
      <CvContentContainer>
        <Header
          avatar={Avatar}
          name="Lucas Mota"
          role="Senior Software engineer"
          company="Dell"
          age="23"
          country="Brazil"
        />
        <Box>
          <GenericSection title="Introduction" data={intro} />
        </Box>
        <Box>
          <Skills />
        </Box>
        <Box>
          <GenericSection title="Experiences" data={experiences} />
        </Box>
        <Box>
          <GenericSection title="Education" data={education} />
        </Box>
      </CvContentContainer>
    );
  }
}

export default CvContent;
