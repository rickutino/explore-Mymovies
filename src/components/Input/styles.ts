import styled from "styled-components";
import theme from "../../styles/theme";

export type ThemeTypeProps = {
  theme: typeof theme
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }: ThemeTypeProps) => theme.COLORS.BLACK_800};
  color: ${({ theme }: ThemeTypeProps) => theme.COLORS.GRAY_200};

  margin-bottom: 8px;
  border-radius: 10px;
  
  > input {
    height: 48px;
    width: 100%;

    padding: 12px 16px;

    color: ${({ theme }: ThemeTypeProps) => theme.COLORS.WHITE};
    background: transparent;
    border: 0;

    &:placeholder {
      color: ${({ theme }: ThemeTypeProps) => theme.COLORS.GRAY_200};
    }
  }

  > svg {
    margin-left: 16px;
    color: ${({ theme }: ThemeTypeProps) => theme.COLORS.GRAY_700};
  }
`;