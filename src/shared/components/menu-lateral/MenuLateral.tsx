
import * as React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDrawerContext } from "../../contexts";
import { useEffect } from "react";
interface IMenuLateralProps {
  children?: React.ReactNode;
}
export const MenuLateral: React.FC<IMenuLateralProps> = ({ children }) => {

  const { drawerWidth, isDrawerOpen, toggleDrawerOpen, drawerOptions } = useDrawerContext();

  useEffect(() => {
    console.log("drawerOptions", drawerOptions);
  }, []);

  const theme = useTheme();

  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Drawer
      open={isDrawerOpen}
      onClose={toggleDrawerOpen}
      sx={{
        //width: drawerWidth,
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
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={drawerOptions.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {/* <Divider />
      <List>
        {["Emails", "Lixeira", "Outros"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Drawer>
  );
};