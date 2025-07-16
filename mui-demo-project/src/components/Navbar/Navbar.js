import React from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { mainNavBarItems } from "../const/NavbarItems";
import { useNavigate } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { Box, Grid2 } from "@mui/material";
// import { Link } from '@mui/material';

const Navbar = ({ drawerWidth }) => {
  const navigate = useNavigate();
  return (
    <Box sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
      <Drawer
        sx={{
          width: drawerWidth,
          // width: "100%",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            // width: "100%",
            boxSizing: "border-box",
            backgroundColor: "#222222",
            color: "#ffffff",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {mainNavBarItems.map((item, index) => (
            // onClick={() => `/${navigate(item.route)}`}
            <NavLink
              to={item.route}
              style={{
                textDecoration: "unset",
              }}
              key={item.id}
              className={({ isActive }) => {
                console.log(isActive);
                return isActive ? "active-link" : "";
              }}
            >
              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    color: "#ffffff",
                    textDecoration: "none",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color: "#ffffff",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    sx={{
                      color: "ffffff",
                    }}
                    primary={item.label}
                  />
                </ListItemButton>
              </ListItem>
            </NavLink>
          ))}
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
};

export default Navbar;
