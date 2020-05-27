import styled from "styled-components";
import { device } from "../../utils/device";

export const BoxContainer = styled.div`
  display: flex;
  padding: 0;
  width: 1200px;
  max-width: 100%;
  flex-direction: column;
  .simple {
    margin: 2rem auto 1rem;
  }
  &.styled {
    background-color: #fff;
    box-shadow: 0px 0px 13px 6px rgba(0, 0, 0, 0.2);
    min-height: 50vh;
    @media ${device.laptopL} {
      border-radius: 4px;
      margin: 2rem auto;
    }
  }

  & + & {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    padding-top: 2rem;
    border-top: 1px solid #ddd;
    &:last-child {
      padding-bottom: 2rem;
    }
    @media ${device.laptopL} {
      border-color: #eee;
      margin-top: 0;
    }
  }

  @media ${device.laptopL} {
    &:first-child {
      margin-top: 2rem;
    }
  }
`;
