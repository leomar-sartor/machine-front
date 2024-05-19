import CssBaseline from "@mui/material/CssBaseline";
import { AppThemeProvider, DrawerProvider } from "./shared/contexts";
import { MenuLateral } from "./shared/components/menu-lateral/MenuLateral";
import { AppBar } from "./shared/components/app-bar/AppBar";
import { PageMain } from "./shared/components/page-main/PageMain";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";

export default function PersistentDrawerLeft() {

  return (
    <AppThemeProvider>
      <DrawerProvider>
        <BrowserRouter>

          <AppBar />

          <CssBaseline />

          <AppRoutes />

          <MenuLateral>
          </MenuLateral>

          
          {/* <PageMain /> */}

        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider >
  );
}