import React from 'react';
import { IconButton, Button, Menu, MenuItem, Divider } from '@mui/material';
import './NavBar.scss';
import SettingsIcon from '@mui/icons-material/Settings';
import ListIcon from '@mui/icons-material/List';
import MenuBookIcon from '@mui/icons-material/MenuBook';

function NavBar({setOpenDrawer, viewMode, setSettingsOpen, setViewMode, setCutDisplay, altOption, setAltOption}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorSettingsEl, setAnchorSettingsEl] = React.useState(null);
    const modeOpen = Boolean(anchorEl);
    const settingsOpen = Boolean(anchorSettingsEl);






    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleSettingsClick = (event) => {
        setAnchorSettingsEl(event.currentTarget);
      };

    const handleClose = () => {
      setAnchorEl(null);
    };
    const handleSettingsClose = () => {
        setAnchorSettingsEl(null);
    };

const changeViewMode = (mode) => {
    setViewMode(mode)
    handleClose()
}

const changeCutDisplay = (display) => {
    console.log(display)
    setCutDisplay(
      {
        sceneDeleted: display,
        redundancy: display,
        purple: display,
        cutForLength: display,
        shorteningFemales: display,
        moved: display,
      }
      )
}

const openDrawer = () => {
    setOpenDrawer(true)
}

let styleObject = {
    lineHeight: '0', 
    borderRadius: '35px' 
}

if (viewMode === 'Basic') {
    styleObject.backgroundColor = '#8C8594'
} else if (viewMode === 'Reader') {
    styleObject.backgroundColor = '#DA4167'
} else if (viewMode === 'Student') {
    styleObject.backgroundColor = '#067BC2'
} else if (viewMode === 'Performer') {  
    styleObject.backgroundColor = '#1A936F'
}

  return (
    <div className="NavBar">
        <div className="TitleContainer">
            <h4 onClick={() => setSettingsOpen(false)}>Romeo & Juliet</h4>
        </div>
        <div className="ButtonContainer">
        <Button variant="contained" 
        size="small" 
        style={styleObject}
        id="mode-positioned-button"
        aria-controls={modeOpen ? 'mode-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={modeOpen ? 'true' : undefined}
        onClick={handleClick}
        
        >
            <MenuBookIcon style={{ marginRight: '10px'}} />
            <p>{viewMode}</p>
        </Button>
        <Menu
        id="mode-positioned-menu"
        aria-labelledby="mode-positioned-button"
        anchorEl={anchorEl}
        disableScrollLock={true} 
        open={modeOpen}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={(e) => changeViewMode('Basic')}>Basic</MenuItem>
        <MenuItem onClick={(e) => changeViewMode('Reader')}>Reader</MenuItem>
        <MenuItem onClick={(e) => changeViewMode('Student')}>Student</MenuItem>
        <MenuItem onClick={(e) => changeViewMode('Performer')}>Performer</MenuItem>
      </Menu>
        <IconButton aria-label="list" color="primary" onClick={openDrawer}>
            <ListIcon />
        </IconButton>
        <IconButton 
        aria-label="settings" 
        color="primary"
        id="settings-positioned-button"
        aria-controls={settingsOpen ? 'settings-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={settingsOpen ? 'true' : undefined}
        onClick={handleSettingsClick}
        >
            <SettingsIcon />
        </IconButton>
        <Menu
        id="settings-positioned-menu"
        aria-labelledby="settings-positioned-button"
        anchorEl={anchorSettingsEl}
        disableScrollLock={true} 
        open={settingsOpen}
        onClose={handleSettingsClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
                {
            altOption ? <MenuItem onClick={(e) => setAltOption(false)}>Hide Alternate Lines</MenuItem> : <MenuItem onClick={(e) => setAltOption(true)}>View Alternate Lines</MenuItem>
        }
                <Divider />
        <p> Cut Lines:</p>
        <MenuItem onClick={(e) => changeCutDisplay('greyed')}>Greyed Out</MenuItem>
        <MenuItem onClick={(e) => changeCutDisplay('lines')}>Dashed Line ---</MenuItem>
        <MenuItem onClick={(e) => changeCutDisplay('none')}>Hidden</MenuItem>
        <Divider />
        <MenuItem onClick={(e) => setSettingsOpen(true)}>Cut Display Settings</MenuItem>
      </Menu>
        </div>
    </div>
  );
}

export default NavBar;