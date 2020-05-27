import styled from "styled-components";
import { device } from "../../utils/device";

export const TitleElement = styled.h1`
  letter-spacing: 0.6px;
  margin: 1rem 0;
  @media ${device.laptopL} {
    margin: 0 0 0 3rem;
  }
`;
