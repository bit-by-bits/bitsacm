import "./Styles/index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import ErrorPage from "./ErrorPage";
import About from "./About";
import Contact from "./Contact";
import Events from "./Events";
import Learning from "./Learning";
import Members from "./Members";
import Projects from "./Projects";
import SIGs from "./SIGs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/events",
    element: <Events />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/learning",
    element: <Learning />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/members",
    element: <Members />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/projects",
    element: <Projects />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/SIGs",
    element: <SIGs />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
