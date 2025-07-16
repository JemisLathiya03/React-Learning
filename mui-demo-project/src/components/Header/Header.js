import { Avatar, Box, IconButton, Tooltip, Typography } from "@mui/material";
import React from "react";
import CommonButton from "../commons/commonButton/CommonButton";
import NotificationBell from "../commons/notificationBell/NotificationBell";
import HelpIcon from "@mui/icons-material/Help";

const Header = ({ title }) => {

  const headerStyle = {
    mainWrapper:{
      backgroundColor : (theme) => theme.palette.primary.main,
      color : (theme) => theme.palette.white.main,
      padding: "25px",
    },

    firstRow:{
      display: "flex",
      alignItems: "center",
      justifyContent: "end",
      gap: "5px",
      paddingBottom : "16px"
    },

    secondRow:{
      display: "flex",
      justifyContent: "space-between",
    }
  }

  return (
    <Box sx={headerStyle.mainWrapper}>
      <Box sx={headerStyle.firstRow}>
        <CommonButton
          variant={"contained"}
          children={"Go to docs"}
          color={"primary"}
        ></CommonButton>
        <NotificationBell colorVal={"white"} badgeContent={4} />
        <Avatar
          alt="Remy Sharp"
          src="https://next.mui.com/static/images/avatar/1.jpg"
        />
      </Box>
      <Box sx={headerStyle.secondRow}>
        <Typography variant="h4">{title}</Typography>
        <Box>
          <CommonButton
            variant={"outlined"}
            children={"Web Setup"}
            color={"secondary"}
          ></CommonButton>
          <Tooltip title="help">
            <IconButton color="white">
              <HelpIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
