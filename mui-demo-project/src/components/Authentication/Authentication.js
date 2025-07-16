import { Avatar, Box, Grid2, IconButton, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
import CommonButton from "../commons/commonButton/CommonButton";
import { useTheme } from "@emotion/react";
import NotificationBell from "../commons/notificationBell/NotificationBell";
import CommonMenu from "../commons/commonMenu/CommonMenu";
import BasicCard from "../commons/basicCard/BasicCard";
import SearchBar from "../commons/searchBar/SearchBar";
import RefreshIcon from "@mui/icons-material/Refresh";
import "./style.scss";
import BasicModal from "../commons/basicModal/BasicModal";
import NewUserModal from "../Modal/NewUserModal/NewUserModal";
// import { Grid2 } from '@mui/material';

const Authentication = () => {
  const [open, setOpen] = useState(false);

  const [users, setUsers] = useState([]);
  const [searchResult, setSearchResult] = useState(users);

  const addNewUser = (data) => {
    const userData={
      userStateId : data.userId,
      emailState : data.email,
      phoneNumberState: data.phoneNumber
    }
    setUsers((previousData) => [...previousData , userData ]);
    setOpen(false);
    setSearchResult(users)
  };

  const getHeader = () => {
    const handleOnchage = (value) => {
      // console.log(users)
      // setSearchResult(users)
      const lowerCaseVal = value.toLowerCase().trim();
      console.log(searchResult)
      if(lowerCaseVal === ""){
        setUsers(searchResult);
        console.log("Enter")
      // }
      }else{
        setSearchResult(users)
        const filterData = searchResult.filter((item) => {
          console.log(Object.keys(item));
        
          return Object.keys(item).some((key) => {
            const value = item[key];
        
            // Ensure the value is a valid string before calling .toString()
            if (value == null) return false; // Skip null or undefined values
        
            // Check if the item's value includes the search term (in lowercase)
            return value
              .toString()
              .toLowerCase()
              .includes(lowerCaseVal.toLowerCase());
          });
        });
        
        
        console.log(filterData)
        setUsers(filterData)
        // setUsers(filterData);
      }

    };

    return (
      <div className="header">
        <SearchBar
          placeholder="Search by email address, phone number, or user UID"
          handleOnchage={(event) => handleOnchage(event.target.value)}
        />
        <Box>
          <CommonButton
            children={"Add User"}
            color={"primary"}
            variant={"contained"}
            handleClickAction={() => {
              setOpen(true);
            }}
          />
          <IconButton>
            <RefreshIcon />
          </IconButton>
        </Box>
      </div>
    );
  };

  const getContent = () => {
    return (
      <>
        {console.log(users.length)}
        {users.length ? (
          <Box>{users.map(user => <div style={{marginBottom: "15px"}}>
            <Typography>User Id : {user.userStateId}</Typography>
            <Typography>Email : {user.emailState}</Typography>
            <Typography>Phone Number : {user.phoneNumberState}</Typography>
          </div>
          )}</Box>
        ) : (
          <Typography
            align="center"
            variant="h6"
            sx={{ margin: "40px 0px", fontSize: "16px", color: "#a8a8a8" }}
          >
            No users for this project yet
          </Typography>
        )}
      </>
    );
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <BasicCard header={getHeader()} content={getContent()} />
      <NewUserModal
        open={open}
        handleClose={handleClose}
        addNewUser={addNewUser}
        users={users}
      />
    </Box>
  );
};

export default Authentication;
