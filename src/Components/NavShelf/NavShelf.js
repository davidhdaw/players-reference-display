import React from "react";
import "./NavShelf.scss";
import { ClickAwayListener, Drawer } from "@mui/material";
import ActShelf from "../ActShelf/ActShelf";

function NavShelf({play, openDrawer, setOpenDrawer}) {
    console.log(play[0])
    return(
        <div className='NavShelf'>
            <ClickAwayListener
            mouseEvent="onMouseDown"
            touchEvent="onTouchStart"
            open={openDrawer}
            onClickAway={() => openDrawer && setOpenDrawer(false)}
            >
            <Drawer
                sx={{
                    width: 1/4,
                    flexShrink: 0,
                    color: '#F6F7F9',
                    bgcolor: '#473C53',
                    '& .MuiDrawer-paper': {
                    width: 1/4,
                    bgcolor: '#473C53',
                    },
                }}
              variant="persistent"
              anchor="right"
              open={openDrawer}
              >
                {
            play && play.map((act, i) => {
            if (act.length > 0) {
                return (
                    <ActShelf act={act} acti={i} />
                )
            }
                }
            )
        }
            </Drawer>
            </ClickAwayListener>
        </div>
    )
}

export default NavShelf;