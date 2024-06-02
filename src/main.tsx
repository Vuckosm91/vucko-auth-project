import { AuthProvider } from "@asgardeo/auth-react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const config = {
  signInRedirectURL: "http://localhost:5173/callback",
  signOutRedirectURL: "http://localhost:5173/callback",
  clientID: "Jx7snNoNWYU9SVjvJqwHK3YRn2Ua",
  baseUrl: "https://weinercloud.com",
  scope: ["openid", "profile"],
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthProvider config={config}>
    <App />
  </AuthProvider>
);
