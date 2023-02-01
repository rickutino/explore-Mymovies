import styled from "styled-components";
import theme from "../../styles/theme";

export type ThemeTypeProps = {
  theme: typeof theme
}

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }: ThemeTypeProps) => theme.COLORS.RED_800};

  border: none;

  padding: 32px;
  border-radius: 8px;

  > h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }: ThemeTypeProps) => theme.COLORS.WHITE};
  }

  > p {
    text-align: justify;
    font-size: 16px;
    line-height: 19px;
    color: ${({ theme }: ThemeTypeProps) => theme.COLORS.GRAY_700};
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 30px;
  }
`;