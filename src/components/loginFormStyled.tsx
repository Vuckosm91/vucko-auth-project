import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import styled, { keyframes } from "styled-components";

export const CheckIconStyledGreen = styled(CheckIcon)`
  color: green;
  margin-left: 0.5rem;
`;

export const ClearIconStyledRed = styled(ClearIcon)`
  color: red;
  margin-left: 0.5rem;
`;

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const AppDiv = styled.div`
  height: 100vh;
  width: 100%;
  border: 1px solid black;
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  width: 115%;
`;

export const MainRegister = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  gap: 2.5rem;
  background: linear-gradient(to right, #420580, #8e44ad, #610580);
  background-size: 300% 300%;
  animation: ${gradientAnimation} 10s ease infinite;
`;

export const DivStyledFlexCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

export const InhaltHolder = styled.div`
  display: flex;
  width: 100%;
  gap: 2.5rem;
`;

export const DivStyledFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
`;

export const DivStyledUser = styled(DivStyledFlexColumn)`
  align-items: end;
  justify-content: end;
  background: #0000ff;
  padding-inline: 1rem;
  margin: 0;
`;

export const DivStyledFlexCenterMT1 = styled(DivStyledFlexCenter)`
  margin-top: 3rem;
`;

export const FormRegister = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 1rem;
`;

export const FormDivWrapper = styled.div`
  display: flex;
  background: #0000ff;
  justify-content: start;
  align-items: center;
  flex-direction: column;

  gap: 0.8rem;
  padding: 3rem;
  border: 2px solid gray;
  border-radius: 1rem;
`;

export const InputStyled = styled.input`
  font-style: italic;
  font-weight: 600;
  padding: 0.3rem 0.5rem;
`;

export const LabelStyled = styled.label`
  display: flex;

  font-size: 1.5rem;
  color: #f0f8ff;
`;

export const H1Styled = styled.h1`
  color: #f0f8ff;
`;

export const H1StyledItalic = styled(H1Styled)`
  font-style: italic;
  text-shadow: 1px 1px black;
`;

export const ParagraphStyled = styled.p`
  color: #f0f8ff;
`;

export const InputParagraphStyled = styled.p`
  color: #00ffff;
`;

export const ErrorParagraph = styled.p`
  color: #b32d00;
  font-size: 1.1rem;
  font-weight: 600;
  text-shadow: 1px 1px black;
  font-style: italic;
  margin: 0;
`;

export const ButtonStyledGray = styled.button`
  padding: 0.4rem 1.2rem;
  border: 1px solid blue;
  border-radius: 0.4rem;
  color: blue;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
`;

export const LinkTo = styled.a`
  color: #fff;
  font-style: italic;
  font-size: 2rem;
  cursor: pointer;
`;

export const OnClick = styled.a``;
