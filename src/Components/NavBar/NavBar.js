//Basic React Component

import React from 'react';
import { IconButton, Button, Icon } from '@mui/material';
import './NavBar.scss';
import SettingsIcon from '@mui/icons-material/Settings';
import ListIcon from '@mui/icons-material/List';
import MenuBookIcon from '@mui/icons-material/MenuBook';

function NavBar({setOpenDrawer}) {

const openDrawer = () => {
    setOpenDrawer(true)
}

  return (
    <div className="NavBar">
        <div className="TitleContainer">
            <h4>Romeo & Juliet</h4>
        </div>
        <div className="ButtonContainer">
        <Button variant="contained" size="small" color="primary" style={{ lineHeight: '0', borderRadius: '35px' }}>
            <MenuBookIcon style={{ marginRight: '10px'}} />
            <p>Reader</p>
        </Button>
        <IconButton aria-label="list" color="primary" onClick={openDrawer}>
            <ListIcon />
        </IconButton>
        <IconButton aria-label="settings" color="primary">
            <SettingsIcon />
        </IconButton>
        </div>
    </div>
  );
}

export default NavBar;