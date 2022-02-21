import styled from "styled-components";
import { device } from "../../utils/device";

export const HeaderContainer = styled.div`
  background-color: #9500f0;
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
  text-align: center;

  a {
    color: #FFF;
    text-decoration: underline;

    + a {
      margin-left: 1rem;
    }
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  @media ${device.laptopL} {
    flex-direction: row;
  }

  > * {
    margin-top: 0.5rem;
    
    @media ${device.laptopL} {
      margin-top: 0;
    }
  }

  + div {
    margin-top: 1rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 0 1 100%;
  
  @media ${device.laptopL} {
    flex: 0 1 70%;
    margin-left: 3rem;
  }
`;