import styled from "styled-components";

export const GenericItemBox = styled.div`
  display: flex;
  flex: 100% 0 0;
  flex-direction: column;
  padding: 0 1.5rem;
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const Role = styled.h3`
  color: #5f0073;
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.2rem;
`;

export const Place = styled.p`
  font-weight: 400;
  font-size: 1.1rem;
  margin-bottom: 0.2rem;
`;

export const Period = styled.p`
  margin-bottom: 0.3rem;
  font-size: 1rem;
  margin-bottom: 0.2rem;
`;

export const Description = styled.p`
  color: #333;
  text-align: justify;
  line-height: 1.5;
  margin-bottom: 0;
  font-size: 1.1rem;
`;
