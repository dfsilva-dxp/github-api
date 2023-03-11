import styled, { css } from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 100vh;
`;

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    height: 100%;
    margin: 0 auto;
    padding: ${theme.spacings.large} ${theme.spacings.xsmall};
  `}
`;
