import styled from "styled-components";
import theme from "../../styles/theme";
import authenticationBackground from "../../assets/authenticationBackground.svg"; 

export type ThemeTypeProps = {
  theme: typeof theme
}

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  > h1 {
    font-size: 48px;
    color: ${({ theme }: ThemeTypeProps) => theme.COLORS.RED_200};
    margin-right: auto;
    margin-bottom: 8px;
  }

  > h2 {
    font-size: 24px;
    margin: 48px auto 40px 0;
  }

  > p {
    font-size: 14px;
    color: ${({ theme }: ThemeTypeProps) => theme.COLORS.GRAY_200};
  }

  > a {
    margin-top: 124px;
    color: ${({ theme }: ThemeTypeProps) => theme.COLORS.RED_200};
  }
`;

export const BackgroundIMG = styled.div`
  flex: 1;
  background: url(${authenticationBackground}) no-repeat center center;
  background-size: cover;
`;