import React from "react";
import "./ActShelf.scss";
import {Accordion, ListItemButton, AccordionDetails, AccordionSummary, Grid, useMediaQuery } from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function ActShelf({act, acti, setOpenDrawer, setSettingsOpen}) {

let mobile = false
    
if (useMediaQuery('(max-device-width:600px)')) {
        mobile = true
    }

    const unitClick = (id) => {
            setSettingsOpen(false)
        setTimeout(() => { 
            let offset = 75
            if (mobile) {
                setOpenDrawer(false)
                offset = 125
            } 
            const element = document.getElementById(id)
            // element.scrollIntoView({behavior: 'smooth'})
                window.scrollTo({
                  behavior: 'smooth',
                  top:
                    element.getBoundingClientRect().top -
                    document.body.getBoundingClientRect().top -
                    offset,
                })

    }, 300);


        
        }

    const actNum = acti + 1;

    const actClass = 'Act' + actNum;

    return(
        <div className='ActShelf'>
            <Accordion defaultExpanded={true}>
            <AccordionSummary
                            sx={{

                                flexShrink: 0,
                                color: '#190B28',
                                bgcolor: '#ffffff',
                            }}
            className={actClass}
            expandIcon={<ExpandMoreIcon                             sx={{

                flexShrink: 0,
                color: '#190B28',
                bgcolor: '#ffffff',
            }}/>}
            aria-controls="panel1a-content"
            id={actClass + '-accordion'}
      >
        <p className='sidebar-act'>Act {acti+1}</p>
      </AccordionSummary>
                <AccordionDetails
                   sx={{
                        flexShrink: 0,
                        color: '#190B28',
                        padding: '0px',
                        bgcolor: '#ffffff',
                    }}>
                <Grid container direction="column">
                    {
                       act && act.map((unit, i) => {
                        const unitID = 'unit' + acti + i;
                        const unitNum = i + 1 + (acti * 24);
                            return (
                                <ListItemButton align='left' className='sidebar-unit' key={i} onClick={(e) => unitClick(unitID)} sx={{display: 'flex', 
                                flexDirection: 'column', 
                                alignItems: 'flex-start', 
                                width: 1/1,
                                borderTop: 1,
                                fontSize: 'large',
                                padding: '16px',
                                color: '#190B28',
                                borderColor: '#BAB6BF'}}>
                                    <h2 className='unit-num-shelf'>Unit {unitNum}</h2>
                                    <p className='unit-description-shelf'>{unit.description}</p>
                                </ListItemButton>
                            )
                        })
                    }
                    </Grid>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default ActShelf;