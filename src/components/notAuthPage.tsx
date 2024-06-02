import { MainRegister, DivStyledFlexCenter, H1Styled } from "./loginFormStyled";

const NotAuthPage = () => {
  return (
    <MainRegister>
      <DivStyledFlexCenter>
        <H1Styled>Korisnik nije ulogovan!!!</H1Styled>
      </DivStyledFlexCenter>
    </MainRegister>
  );
};

export default NotAuthPage;
