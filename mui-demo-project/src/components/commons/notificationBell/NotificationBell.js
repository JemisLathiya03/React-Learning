import React from "react";
// import * as React from 'react';
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Badge, IconButton, Tooltip } from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import CommonMenu from "../commonMenu/CommonMenu";

const NotificationBell = ({ colorVal, badgeContent }) => {
  const notiVal = "You Don't have any notification yet.";
  const newNotiVal = `You have ${badgeContent} new notification`;


  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const menuItem = [
    {
      id:1,
      lable:"first menu"
    },
    {
      id:2,
      lable:"second menu"
    }
  ];


  return (
    <>
      <Tooltip title={menuItem.length ? newNotiVal : notiVal}>
        <IconButton aria-label="cart" color={colorVal} onClick={menuItem.length ? handleClick : null}>
          {/* <StyledBadge badgeContent={4} color="secondary"> */}
          {/* <div>NotificationBell</div> */}
          {/* </StyledBadge> */}
          <Badge badgeContent={menuItem.length} color={"error"}>
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Tooltip>
      <CommonMenu open={open} anchorEl={anchorEl} handleClose={handleClose} menuItem={menuItem}/>
    </>
  );
};

export default NotificationBell;
