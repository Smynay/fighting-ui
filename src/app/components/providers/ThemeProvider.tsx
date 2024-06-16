import React, { FC, PropsWithChildren } from "react";

const THEME_KEY = "theme";
export const themes = {
  light: "light",
};

export const ThemeContext = React.createContext({});

const getTheme = (): string => {
  const theme = `${window?.localStorage?.getItem(THEME_KEY)}`;
  if (Object.values(themes).includes(theme)) return theme;

  const userMedia = window.matchMedia("(prefers-color-scheme: light)");
  if (userMedia.matches) return themes.light;

  return themes.light;
};

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = React.useState(getTheme);

  React.useEffect(() => {
    document.documentElement.dataset[THEME_KEY] = theme;
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
