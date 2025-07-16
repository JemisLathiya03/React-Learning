import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function CommonMenu({anchorEl,open,handleClose,menuItem}) {



  return (
    <div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >

        {
          menuItem.map(item => <MenuItem key={item.id} onClick={handleClose}>
            {item.lable}
          </MenuItem>)
        }
      </Menu>
    </div>
  );
}
