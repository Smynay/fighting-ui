import { FightingPage, MenuPage, FightingPageLegacy } from "../pages";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MenuPage />,
  },
  {
    path: "fighting",
    element: <FightingPage />,
  },
  { path: "legacy", element: <FightingPageLegacy /> },
]);
