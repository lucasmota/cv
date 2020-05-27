import React from "react";
import Box from "./components/box/box.component";
import CvContent from "./components/cv-content/cv-content.component";
import { GlobalStyle } from "./global.styles";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Box styled={true}>
        <CvContent />
      </Box>
    </div>
  );
}

export default App;
