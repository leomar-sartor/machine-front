
import * as React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useAppThemeContext, useDrawerContext } from "../../contexts";
import { useEffect } from "react";

import ContrastIcon from '@mui/icons-material/Contrast';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";
// import { Icon } from "@mui/material";
import Icon from '@mui/material/Icon';

<Icon>star</Icon>;

interface IListItemLinkProps {
  to: string;
  label: string;
  icon: string;
  onClick: (() => void) | undefined;
}

const ListItemLink: React.FC<IListItemLinkProps> = ({ to, icon, label, onClick }) => {

  const navigate = useNavigate();

  const resolvePath = useResolvedPath(to);
  const match = useMatch({ path: resolvePath.pathname, end: false });

  const handleClick = () => {
    navigate(to);
    onClick?.();
  };

  return (
    <ListItemButton selected={!!match} onClick={handleClick}>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
};


interface IMenuLateralProps {
  children?: React.ReactNode;
}
export const MenuLateral: React.FC<IMenuLateralProps> = ({ children }) => {

  const { drawerWidth, isDrawerOpen, toggleDrawerOpen, drawerOptions } = useDrawerContext();

  useEffect(() => {
  }, []);

  const theme = useTheme();

  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  const { toggleTheme } = useAppThemeContext();

  return (
    <Drawer
      open={isDrawerOpen}
      onClose={toggleDrawerOpen}
      sx={{
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          ...(!smDown && {
            backgroundColor: "transparent",
            marginTop: "64px;",
            borderRight: "none"
          }),
          ...(smDown && {
            marginTop: "48px;"
          })
        }
      }}
      variant={smDown ? "temporary" : "persistent"}
      anchor="left"
    >
      <List>
        {drawerOptions.map((drawerOptions, index) => (
          <ListItem key={drawerOptions.label} disablePadding>
            <ListItemLink
              to={drawerOptions.path}
              key={drawerOptions.path}
              icon={drawerOptions.icon}
              label={drawerOptions.label}
              onClick={smDown ? toggleDrawerOpen : undefined}
            />
          </ListItem>
        ))}
      </List>

      <Divider />

      <List component="nav">

        <ListItemButton onClick={toggleTheme}>
          <ListItemIcon>
            <ContrastIcon />
          </ListItemIcon>
          <ListItemText primary="Alterar Tema" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Sair" />
        </ListItemButton>

      </List>
    </Drawer>
  );
};