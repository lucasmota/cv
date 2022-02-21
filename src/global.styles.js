import { createGlobalStyle } from "styled-components";
import { device } from "./utils/device";

export const GlobalStyle = createGlobalStyle`
  html {
    font: 400 14px/1 'Roboto', sans-serif;
    background-color: #f0eaff;
    color: #444;
    @media ${device.mobileM} {
      font-size: 16px;
    }
  }

  body {
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: black;
  }

  * {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
  
  @keyframes fadeIn { 
    from { opacity: .9; } 
  }
  
  @keyframes ExperienceLoad { 
    from { width: 0%; } 
  }
`;
