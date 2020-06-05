import React from "react";
import Box from "./components/box/box.component";
import CvContent from "./components/cv-content/cv-content.component";
import { GlobalStyle } from "./global.styles";

const App = () => (
  <div className="App">
    <GlobalStyle />
    <Box styled={true}>
      <CvContent />
    </Box>
  </div>
);

export default App;
