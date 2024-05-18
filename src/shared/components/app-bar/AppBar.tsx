import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useDrawerContext } from "../../contexts";


interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  drawerWidth?: number;
}

const Bar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
  
})<AppBarProps>(({ theme, open, drawerWidth }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: `${drawerWidth}px`,
    zIndex: 1201,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
  }),
}));


interface IAppBarProps {
  children?: React.ReactNode;
}

export const AppBar: React.FC<IAppBarProps> = ({ children }) => {

  const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext();

  return (
    <Bar position="fixed" open={isDrawerOpen} elevation={4}>
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          MACHINES
        </Typography>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawerOpen}
          sx={{ ml: 2 }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </Bar>
  );
};