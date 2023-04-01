import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import {  UserProvider } from './providers/userContext';
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <UserProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </UserProvider>
);
