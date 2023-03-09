import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid var(--highlight); /* Light grey */
  border-top: 5px solid var(--background); /* Black */
  border-radius: 50%;
  animation: spinner 1s linear infinite;

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
