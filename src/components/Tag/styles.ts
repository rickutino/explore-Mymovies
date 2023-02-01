import styled from "styled-components";
import theme from "../../styles/theme";

export type ThemeTypeProps = {
  theme: typeof theme
}

export const Container = styled.span`
  font-size: 12px;
  padding: 6px 14px;
  border-radius: 8px;
  margin-right: 6px;
  
  color: ${({ theme }: ThemeTypeProps) => theme.COLORS.GRAY_200};
  background-color: ${({ theme }: ThemeTypeProps) => theme.COLORS.BLACK_500};
`;