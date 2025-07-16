import React, { useEffect } from 'react'
import {useState} from 'react'
import Navbar from '../Navbar/Navbar'
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Box, Grid2 } from '@mui/material';
import Header from '../Header/Header';



function convertToTitleCase(str) {
  // Step 1: Remove the leading slash if it exists
  const cleanStr = str.startsWith('/') ? str.slice(1) : str;

  // Step 2: Replace hyphens with spaces, then capitalize each word
  const result = cleanStr
    .split('-')                         // Split by hyphen
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())  // Capitalize first letter of each word
    .join(' ');                         // Join words with spaces

  return result;
}

const PageLayout = () => {

  // const drawerWidth = 240;
  const [drawerWidth,setDrawerWidth] = useState(240);

  const[title,setTitle] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setTitle(convertToTitleCase(location.pathname));
  },[location]);

  const sharedObj = {
    drawerWidth:drawerWidth
  }
  // drawerWidth={drawerWidth}
  return (
    <Box sx={{display: 'flex'}}>
      <Navbar drawerWidth={drawerWidth} />
      <Box sx={{
        flexGrow: 1,
        width: { sm: `calc(100% - ${drawerWidth}px)` },
      }}>
        <Header title={title}/>
        <div style={{ padding: '20px', minHeight: '76vh'}}>
        <Outlet context={sharedObj}/>
        </div>
      </Box>
      
    </Box>
  )
}

export default PageLayout