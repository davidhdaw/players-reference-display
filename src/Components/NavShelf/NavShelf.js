import React from "react";
import { useEffect } from "react";
import "./NavShelf.scss";
import { Button, ClickAwayListener, SwipeableDrawer, useMediaQuery } from "@mui/material";
import ActShelf from "../ActShelf/ActShelf";

function NavShelf({play, openDrawer, setOpenDrawer, setSettingsOpen}) {
   
    let drawerStyles = {
        width: 0,
        flexShrink: 0,
        color: '#190B28',
        bgcolor: '#ffffff',
        '& .MuiDrawer-paper': {
        width: 1/4,
        overflow: 'visible',
        bgcolor: '#ffffff'
        },
    }
    

        if (useMediaQuery('(max-device-width:600px)')) {
            drawerStyles = {
                width: 0,
                flexShrink: 0,
                fontsize: '2rem',
                color: '#190B28',
                bgcolor: '#ffffff',
                '& .MuiDrawer-paper': {
                width: 19.2/20,
                overflow: 'visible',
                bgcolor: '#ffffff'
                },
            }
        }


    console.log(play[0])
    return(
        <div className='NavShelf'>
            <ClickAwayListener
            mouseEvent="onMouseDown"
            touchEvent="onTouchStart"
            open={openDrawer}
            onClickAway={() => openDrawer && setOpenDrawer(false)}
            >
            <SwipeableDrawer
                sx={drawerStyles}
              anchor="right"
              open={openDrawer}
              onClose={e => setOpenDrawer(false)}
              >
            <div className="drawerContents">
            <div className='drawerItems'>
                {
            play && play.map((act, i) => {
            if (act.length > 0) {
                return (
                    <ActShelf act={act} acti={i} setOpenDrawer={setOpenDrawer} setSettingsOpen={setSettingsOpen} />
                )
            }
                }
            )
        }
            </div>
            </div>
            </SwipeableDrawer>
            </ClickAwayListener>
        </div>
    )
}

export default NavShelf;