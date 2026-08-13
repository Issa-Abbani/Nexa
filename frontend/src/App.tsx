import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";

import { router } from "./router";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { effectiveTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      effectiveTheme === "dark",
    );
  }, [effectiveTheme]);

  return <RouterProvider router={router} />;
}

export default App;
