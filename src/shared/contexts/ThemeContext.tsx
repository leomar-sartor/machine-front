import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState
} from "react";
import { ThemeProvider } from "@emotion/react";
import { LightTheme, DarkTheme } from "./../themes";
import { Box } from "@mui/material";

interface IThemeContextData {
  themeName: "light" | "dark";
  toggleTheme: () => void;
}

interface IAppThemeProviderProps {
  children: React.ReactNode;
}
const ThemeContext = createContext({} as IThemeContextData);

// hook pra disponibilizar para outro locais
export const useAppThemeContext = () => {
  return useContext(ThemeContext);
};

export const AppThemeProvider: React.FC<IAppThemeProviderProps> = ({
  children
}) => {
  const [themeName, setThemeName] = useState<"light" | "dark">("light");

  //Armazena funções dentro dele que disparam pela array de dependência
  const toggleTheme = useCallback(() => {
    setThemeName((oldThemeName) =>
      oldThemeName === "light" ? "dark" : "light"
    );
  }, []);

  //serve pra armazenar valores
  const theme = useMemo(() => {
    if (themeName === "light") return LightTheme;

    return DarkTheme;
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Box
          width="100vw"
          height="100vh"
          bgcolor={theme.palette.background.default}
        >
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
