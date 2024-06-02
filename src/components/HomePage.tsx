import { useAuthContext } from "@asgardeo/auth-react";
import {
  ButtonStyledGray,
  DivStyledFlexCenter,
  DivStyledFlexCenterMT1,
  DivStyledFlexColumn,
  DivStyledUser,
  H1Styled,
  LinkTo,
  MainRegister,
  ParagraphStyled,
} from "./loginFormStyled";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const { state, signIn, signOut } = useAuthContext();
  const { isAuthenticated, username } = state;
  const handleClick = () => {
    isAuthenticated ? signOut() : signIn(), console.log(isAuthenticated);
  };

  return (
    <>
      <DivStyledUser>
        <ParagraphStyled>
          {isAuthenticated ? `Dobrodosao, ${username}` : "Niste prijavljeni"}
        </ParagraphStyled>
      </DivStyledUser>
      <MainRegister>
        <DivStyledFlexColumn>
          <DivStyledFlexCenter>
            <H1Styled>
              {isAuthenticated ? "Korisnik je ulogovan" : "Nisi ulogovan"}
            </H1Styled>
            <LinkTo onClick={() => navigate("/")}>idi na formu...</LinkTo>
          </DivStyledFlexCenter>
          <DivStyledFlexCenterMT1>
            <ButtonStyledGray onClick={handleClick}>
              {isAuthenticated ? "Sign Out" : "Sign In"}
            </ButtonStyledGray>
          </DivStyledFlexCenterMT1>
        </DivStyledFlexColumn>
      </MainRegister>
    </>
  );
};

export default HomePage;
