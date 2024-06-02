import { SecureApp } from "@asgardeo/auth-react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { AppDiv } from "../components/loginFormStyled";
import Register from "../components/Register";
import HomePage from "../components/HomePage";
import PageNotFound from "../components/PageNotFound";
const Layout = () => {
  return (
    <BrowserRouter>
      {/* <SecureApp fallback={<Register />}> */}
      <AppDiv>
        <Routes>
          <Route path="/" element={<Register />}></Route>
          <Route path="/callback" element={<HomePage />}></Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AppDiv>
      {/* </SecureApp> */}
    </BrowserRouter>
  );
};

export default Layout;
