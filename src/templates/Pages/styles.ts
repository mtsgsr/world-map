import styled from "styled-components";

export const Content = styled.section`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  max-width: var(--container);
  margin: auto;
`;

export const Heading = styled.h1`
  font-size: var(--large);
  margin-bottom: var(--large);
`;

export const Body = styled.div`
  p {
    font-size: var(--medium);
    line-height: var(--medium);
  }
`;
