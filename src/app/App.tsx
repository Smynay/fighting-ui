import "./App.css";
import { RouterProvider } from "react-router";
import { router } from "./routing";
import { ThemeProvider } from "./components";

export function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
