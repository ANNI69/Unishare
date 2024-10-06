import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@/components/theme-provider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Auth/Login.tsx";
import Register from "./components/Auth/Register.tsx";
// import Feeds from "./components/Feeds.tsx";
import AuthProvider from "./context/AuthProvider.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import CreateCommunity from "./components/Main/CreateCommunity.tsx";
import Resources from "./components/Main/Resources.tsx";
import QANDA from "./components/Main/Q&A.tsx";
import Hackathon from "./components/Main/Hackathon.tsx";
import Alerts from "./components/Main/Alerts.tsx";
import Internships from "./components/Main/Internships.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: (
        <Login />
    ),
  },
  {
    path: "/register",
    element: (
        <Register />
    ),
  },
  {
    path: "/createCommunity",
    element: (
      <ProtectedRoute>
        <CreateCommunity />
      </ProtectedRoute>
    ),
  },
  {

    path: "/resources",
    element: (
      <ProtectedRoute>
        <Resources />
      </ProtectedRoute>
    ),
  },
  {
    path: "/qna",
    element: (
      <ProtectedRoute>
        <QANDA />
      </ProtectedRoute>
    ),
  },
  {
    path: "/hackaton",
    element: (
      <ProtectedRoute>
        <Hackathon />
      </ProtectedRoute>
    ),
  },
  {
    path: "/alerts",
    element: (
      <ProtectedRoute>
        <Alerts />
      </ProtectedRoute>
    ),
  },
  {
    path: "/internships",
    element: (
      <ProtectedRoute>
        <Internships />
      </ProtectedRoute>
    ),
  },

]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AuthProvider isUserLoggedIn={false}>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
