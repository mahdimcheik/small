import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import User from "./pages/User.jsx";
import UserContextProvider from "./contextes/UserContext.jsx";
import ValidationService from "./services/ValidationService.js";
import axios from "axios";
import UserUpdate from "./pages/UserUpdate.jsx";
import Inscription from "./pages/Inscription.jsx";

const validationService = new ValidationService();
const router = createBrowserRouter([
  {
    loader: async () => {
      const token = validationService.getLocalStorage("token");
      if (token) {
        try {
          const { data } = await axios.get(
            `http://localhost:3310/users/getprofile`,
            { headers: { Authorization: `Bearer ${token}` } }
          );
          if (data) {
            validationService.setLocalStorage("token", data.token);
            return data;
          }
          validationService.emptyLocalStorage("token");
          return null;
        } catch (error) {
          return null;
        }
      }
      return null;
    },
    path: "/",
    element: (
      <UserContextProvider>
        <App />
      </UserContextProvider>
    ),
    children: [
      {
        path: "/user",
        element: <User />,
      },
      {
        path: "/user/update",
        element: <UserUpdate />,
      },
      {
        path: "/user/inscription",
        element: <Inscription />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
