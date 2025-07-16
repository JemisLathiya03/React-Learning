import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Box, IconButton, Input } from "@mui/material";

const SearchBar = ({ placeholder, handleOnchage }) => {
  return (
    <Box>
      <IconButton>
        <SearchIcon />
      </IconButton>
      <Input disableUnderline placeholder={placeholder} onChange={handleOnchage} sx={{minWidth: "400px"}}/>
    </Box>
  );
};

export default SearchBar;
