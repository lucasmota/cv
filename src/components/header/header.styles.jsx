import styled from "styled-components";
import { device } from "../../utils/device";

export const HeaderContainer = styled.div`
  background-color: #5f0073;
  padding: 2rem;
  display: flex;
  align-items: center;
  color: #fff;
  flex-direction: column;
  justify-content: center;
  @media ${device.laptopL} {
    justify-content: flex-start;
    border-radius: 3px 3px 0 0;
    flex-direction: row;
  }
`;

export const Avatar = styled.img`
  border-radius: 50%;
  max-width: 120px;
  box-shadow: 1px 2px 13px 3px rgba(0, 0, 0, 0.1);
  @media ${device.mobileM} {
    max-width: 150px;
  }
`;

export const Paragraph = styled.p`
  font-weight: 300;
  font-size: 1.1rem;
  letter-spacing: 0.4px;
  margin: .2rem 0;
  text-align: center;
  @media ${device.laptopL} {
    margin: 0 0 0 2rem;
  }
`;
