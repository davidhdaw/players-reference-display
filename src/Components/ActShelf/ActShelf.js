import React from "react";
import "./ActShelf.scss";
import {Accordion, ListItemButton, AccordionDetails, AccordionSummary, Grid } from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


function ActShelf({act, acti}) {

    const testFunction = (id) => {
        const element = document.getElementById(id)
        element.scrollIntoView({behavior: 'smooth'})
    }

    const actNum = acti + 1;

    const actClass = 'Act' + actNum;

    return(
        <div className='ActShelf'>
            <Accordion>
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
                            return (
                                <ListItemButton align='left' className='sidebar-unit' key={i} onClick={(e) => testFunction(unitID)} sx={{display: 'flex', 
                                flexDirection: 'column', 
                                alignItems: 'flex-start', 
                                width: 1/1,
                                borderTop: 1,
                                padding: '16px',
                                color: '#190B28',
                                borderColor: '#BAB6BF'}}>
                                    <h2 className='unit-num-shelf'>Unit {i+1}</h2>
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