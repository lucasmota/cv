import styled from "styled-components";
import { device } from "../../utils/device";

export const SkillItemBox = styled.div`
  display: flex;
  flex: 100% 0 0;
  flex-direction: column;
  padding: 0 1.5rem;
  margin-bottom: 1rem;
  @media ${device.tablet} {
    flex: 50% 0 0;
  }
  @media ${device.laptop} {
    flex: 33% 0 0;
  }
  @media ${device.laptopL} {
    flex: 25% 0 0;
  }
`;

export const Name = styled.p`
  color: #333;
  font-weight: 400;
  margin-bottom: 0.3rem;
  font-size: 16px;
`;

export const Experience = styled.div`
  display: block;
  width: 100%;
  height: 15px;
  background-color: rgba(95, 0, 115, 0.14);
  position: relative;
  animation: fadeIn 1s infinite alternate;
  border-radius: 2px;
  &::before {
    content: "";
    background-color: #9500f0;
    width: ${(props) => props.width ?? "100"}%;
    height: 100%;
    display: block;
    border-radius: 2px;
    animation: ExperienceLoad 3s alternate;
  }
`;
