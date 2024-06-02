import { useAuthContext } from "@asgardeo/auth-react";
import axios from "axios";
import { useFormik } from "formik";
import { registerSchema } from "../../schema/schema";
import {
  ButtonStyledGray,
  CheckIconStyledGreen,
  ClearIconStyledRed,
  DivStyledFlexCenterMT1,
  DivStyledFlexColumn,
  DivStyledUser,
  ErrorParagraph,
  FormDivWrapper,
  FormRegister,
  H1StyledItalic,
  InhaltHolder,
  InputParagraphStyled,
  InputStyled,
  LabelStyled,
  MainRegister,
  ParagraphStyled,
} from "./loginFormStyled";

const Register = () => {
  const { state, signIn, signOut } = useAuthContext();
  const { isAuthenticated } = state;
  const handleClick = () => {
    isAuthenticated ? signOut() : signIn(), console.log(isAuthenticated);
  };

  const onSubmit = () => {
    console.log("Form submitted");
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        username: "",
        password: "",
        confirmPass: "",
      },
      onSubmit,
      validationSchema: registerSchema,
    });

  return (
    <>
      <DivStyledUser>
        <ParagraphStyled>
          {isAuthenticated ? `${state.displayName}` : ""}
        </ParagraphStyled>
      </DivStyledUser>
      <MainRegister>
        <DivStyledFlexColumn>
          <InhaltHolder>
            <H1StyledItalic>
              Sada cekamo Dusana, da nam napravi Server
            </H1StyledItalic>
            <FormDivWrapper>
              <FormRegister onSubmit={handleSubmit}>
                <LabelStyled htmlFor="userName">
                  Username
                  {touched.username && errors.username ? (
                    <ClearIconStyledRed />
                  ) : touched.username && !errors.username ? (
                    <CheckIconStyledGreen />
                  ) : null}
                </LabelStyled>
                <InputStyled
                  id="username"
                  type="text"
                  name="username"
                  placeholder="Upisi Username..."
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></InputStyled>
                {errors.username && touched.username && (
                  <ErrorParagraph>{errors.username}</ErrorParagraph>
                )}

                <LabelStyled htmlFor="password">
                  Password
                  {touched.password && errors.password ? (
                    <ClearIconStyledRed />
                  ) : touched.password && !errors.password ? (
                    <CheckIconStyledGreen />
                  ) : null}
                </LabelStyled>
                <InputStyled
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Budi mastovit..."
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></InputStyled>
                {errors.password && touched.password && (
                  <ErrorParagraph>{errors.password}</ErrorParagraph>
                )}

                <LabelStyled htmlFor="password">
                  Confirm Password
                  {touched.confirmPass &&
                  values.confirmPass === values.password ? (
                    <CheckIconStyledGreen />
                  ) : touched.confirmPass ? (
                    <ClearIconStyledRed />
                  ) : null}
                </LabelStyled>
                <InputStyled
                  id="confirmPass"
                  type="password"
                  name="confirmPass"
                  placeholder="Potvrdi sifru..."
                  value={values.confirmPass}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></InputStyled>
                {values.confirmPass !== values.password ? (
                  <InputParagraphStyled>
                    Proveri kako si nakucao sifru
                  </InputParagraphStyled>
                ) : (
                  <ErrorParagraph>{errors.confirmPass}</ErrorParagraph>
                )}

                <ButtonStyledGray type="submit">Sign Up</ButtonStyledGray>
                <DivStyledFlexCenterMT1>
                  <ParagraphStyled>
                    {isAuthenticated
                      ? `Hej, ${state.displayName}, ispod se mozes izlogovati`
                      : "Already registered?"}
                  </ParagraphStyled>
                </DivStyledFlexCenterMT1>
              </FormRegister>
              <ButtonStyledGray onClick={handleClick}>
                {isAuthenticated ? "Sign Out" : "Sign In"}
              </ButtonStyledGray>
            </FormDivWrapper>
          </InhaltHolder>
        </DivStyledFlexColumn>
      </MainRegister>
    </>
  );
};

export default Register;
