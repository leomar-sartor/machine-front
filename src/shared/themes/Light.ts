import { createTheme } from "@mui/material";
import { cyan, green } from "@mui/material/colors";

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: green[700],
      dark: green[800],
      light: green[500],
      contrastText: "#ffffff"
    },
    secondary: {
      main: cyan[700],
      dark: cyan[800],
      light: cyan[500],
      contrastText: "#ffffff"
    },
    background: {
      default: "#f7F6F3",
      paper: "#ffffff"
    }
  }
});
