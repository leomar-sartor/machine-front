import { styled, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as React from "react";
import { useDrawerContext } from "../../contexts";

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
  screenmd?: boolean;
  drawerwidth?: number;
}>(({ theme, open, screenmd, drawerwidth }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(!screenmd && {
    marginTop: "64px"
  }),
  ...(screenmd && {
    marginTop: "48px"
  }),
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: `${drawerwidth}px`
  })
}));


interface IPageMainProps {
  children?: React.ReactNode;
}

export const PageMain: React.FC<IPageMainProps> = ({ children }) => {

  const { drawerWidth, isDrawerOpen } = useDrawerContext();

  const theme = useTheme();

  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Main open={isDrawerOpen} screenmd={smDown ? smDown : undefined} drawerwidth={drawerWidth ? drawerWidth : undefined }>
      { children }
    </Main>
  );
}