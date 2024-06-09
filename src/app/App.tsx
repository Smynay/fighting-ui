import { RouterProvider } from "react-router";
import { router } from "./routing";

export function App() {
  return <RouterProvider router={router} />;
}
