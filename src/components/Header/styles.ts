import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from "../../styles/theme";

export type ThemeTypeProps = {
  theme: typeof theme
}


export const Container = styled.header`
  height: 105px;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }: ThemeTypeProps) => theme.COLORS.BLACK_200};

  display: flex;
  justify-content: space-between;
  align-items: center;
  
  padding: 0px 10rem 0 5.5rem;
`;

export const Profile = styled(Link)`
  gap: 16px;
  display: flex;
  align-items: center;

  > img {
    height: 56px;
    width: 56px;
    border-radius: 50%;
    border: 1px solid ${({ theme }: ThemeTypeProps) => theme.COLORS.BLACK_200};
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    line-height: 18px;
    gap: 3px;

    span {
      font-size: 14px;
      color: ${({ theme }: ThemeTypeProps) => theme.COLORS.GRAY_700};
    }

    strong {
      font-size: 18px;
      color: ${({ theme }: ThemeTypeProps) => theme.COLORS.WHITE};
    }
  }
`;

export const Brand = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  background-color: ${({ theme }: ThemeTypeProps) => theme.COLORS.BACKGROUND_900};

  > h1 {
    font-size: 24px;
    color: ${({ theme }: ThemeTypeProps) => theme.COLORS.RED_200};
  }
`;


export const Search = styled.div`
  width: 65%;
`;