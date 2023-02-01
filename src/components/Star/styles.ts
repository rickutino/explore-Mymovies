import { FiStar } from "react-icons/fi";
import styled from "styled-components";
import theme from "../../styles/theme";

export type ThemeTypeProps = {
  theme: typeof theme,
}

export const Container = styled.div`
  display: flex;
  margin: 8px 0 16px;
  color: ${({theme}:ThemeTypeProps)  => theme.COLORS.RED_200};

  .checked{
    fill: ${({theme}:ThemeTypeProps)  => theme.COLORS.RED_200};
  }
`;