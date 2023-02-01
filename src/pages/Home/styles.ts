import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from "../../styles/theme";

export type ThemeTypeProps = {
  theme: typeof theme
}

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 50px -20px 40px 20px;
`;



export const Content = styled.div`
  padding: 0 155px 0 75px;
  overflow-y: auto;
`;

export const NewMovie = styled(Link)`
  background-color: ${({ theme }: ThemeTypeProps) => theme.COLORS.RED_200};
  color: ${({ theme }: ThemeTypeProps) => theme.COLORS.BLACK_800};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  width: 200px;
  padding: 12px;
  border-radius: 8px;
`;