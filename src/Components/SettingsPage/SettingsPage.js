import React from "react";
import "./SettingsPage.scss";
import { IconButton, Button} from '@mui/material';
function SettingsPage({ cutDisplay, setCutDisplay, setSettingsOpen}) {


    const changeCutDisplay = (catagory, displayOption) => {
        let newCutDisplay = {...cutDisplay}
        newCutDisplay[catagory] = displayOption
        setCutDisplay(newCutDisplay)
        } 

        const styleObject = {
            lineHeight: '1', 
            backgroundColor: '#f6f7f9',
            color: 'black',
            borderRadius: '35px',
            fontSize: '18px',
        }

        const selectedStyleObject = {
            lineHeight: '1',
            borderRadius: '35px',
            backgroundColor: '#067BC2',
            fontSize: '18px',
        } 
        
        const sxProps = {
            mr: 2,
            boxShadow: 0
        }


    return(
        <div className='settingsPage'>
            <div className='close-button'>
                <IconButton size='small' onClick={() => setSettingsOpen(false)}>X</IconButton>
            </div>
            <div><p className="cut-type-heading">Entire Scene or Chorus Deleted from Quarto 1</p>
            <div className='settings-buttons'>       
                <Button
                    variant="contained" 
                    size="small"
                    className="settings-button"
                    sx={sxProps}
                    style={cutDisplay.sceneDeleted === 'greyed' ? selectedStyleObject : styleObject}
                    onClick={() => changeCutDisplay('sceneDeleted', 'greyed')}>Greyed Out</Button>
                <Button 
                    variant="contained" 
                    size="small" 
                    sx={sxProps}
                    className="settings-button"
                    style={cutDisplay.sceneDeleted === 'lines' ? selectedStyleObject : styleObject}
                    onClick={() => changeCutDisplay('sceneDeleted', 'lines')}>Dashed Line</Button>
                <Button 
                    variant="contained" 
                    size="small" 
                    sx={sxProps}
                    className="settings-button"
                    style={cutDisplay.sceneDeleted === 'none' ? selectedStyleObject : styleObject}
                    onClick={() => changeCutDisplay('sceneDeleted', 'none')}> Fully Hidden</Button>
            </div>
            </div>
            <div><p className="cut-type-heading">Redundancy</p>
                <Button                     
                    variant="contained" 
                    size="small" 
                    sx={sxProps}
                    className="settings-button"
                    style={cutDisplay.redundancy === 'greyed' ? selectedStyleObject : styleObject}
                    onClick={() => changeCutDisplay('redundancy', 'greyed')}>Greyed Out</Button>
                <Button                     
                    variant="contained" 
                    size="small" 
                    sx={sxProps}
                    className="settings-button"
                    style={cutDisplay.redundancy === 'lines' ? selectedStyleObject : styleObject}
                    onClick={() => changeCutDisplay('redundancy', 'lines')}>Dashed Line</Button>
                <Button 
                    variant="contained" 
                    size="small" 
                    sx={sxProps}
                    className="settings-button"
                    style={cutDisplay.redundancy === 'none' ? selectedStyleObject : styleObject}
                    onClick={() => changeCutDisplay('redundancy', 'none')}> Fully Hidden</Button>
            </div>
            <div><p className="cut-type-heading">Purple Passage</p>     
                <Button 
                variant="contained" 
                size="small" 
                sx={sxProps}
                className="settings-button"
                style={cutDisplay.purple === 'greyed' ? selectedStyleObject : styleObject}
                onClick={() => changeCutDisplay('purple', 'greyed')}>Greyed Out</Button>
                <Button 
                variant="contained" 
                size="small" 
                sx={sxProps}
                className="settings-button"
                style={cutDisplay.purple === 'lines' ? selectedStyleObject : styleObject}
                onClick={() => changeCutDisplay('purple', 'lines')}>Dashed Line</Button>
                <Button 
                variant="contained" 
                size="small" 
                sx={sxProps}
                className="settings-button"
                style={cutDisplay.purple === 'none' ? selectedStyleObject : styleObject}
                onClick={() => changeCutDisplay('purple', 'none')}> Fully Hidden</Button>
            </div>
            <div><p className="cut-type-heading">Cut for Length</p>
                <Button 
                variant="contained" 
                size="small" 
                sx={sxProps}
                className="settings-button"
                style={cutDisplay.cutForLength === 'greyed' ? selectedStyleObject : styleObject}
                onClick={() => changeCutDisplay('cutForLength', 'greyed')}>Greyed Out</Button>
                <Button 
                variant="contained" 
                size="small" 
                sx={sxProps}
                className="settings-button"
                style={cutDisplay.cutForLength === 'lines' ? selectedStyleObject : styleObject}
                onClick={() => changeCutDisplay('cutForLength', 'lines')}>Dashed Line</Button>
                <Button 
                variant="contained" 
                size="small" 
                sx={sxProps}
                className="settings-button"
                style={cutDisplay.cutForLength === 'none' ? selectedStyleObject : styleObject}
                onClick={() => changeCutDisplay('cutForLength', 'none')}> Fully Hidden</Button>
            </div>
            <div><p className="cut-type-heading">Shortening of Female Role(s)</p>
                <Button 
                variant="contained" 
                size="small" 
                sx={sxProps}
                className="settings-button"
                style={cutDisplay.shorteningFemales === 'greyed' ? selectedStyleObject : styleObject}
                onClick={() => changeCutDisplay('shorteningFemales', 'greyed')}>Greyed Out</Button>
                <Button 
                variant="contained" 
                size="small" 
                sx={sxProps}
                className="settings-button"
                style={cutDisplay.shorteningFemales === 'lines' ? selectedStyleObject : styleObject}
                onClick={() => changeCutDisplay('shorteningFemales', 'lines')}>Dashed Line</Button>
                <Button 
                variant="contained" 
                size="small" 
                sx={sxProps}
                className="settings-button"
                style={cutDisplay.shorteningFemales === 'none' ? selectedStyleObject : styleObject}
                onClick={() => changeCutDisplay('shorteningFemales', 'none')}> Fully Hidden</Button>
            </div>
            <div><p className="cut-type-heading"> Moved in Quarto 1 </p>
                <Button 
                variant="contained" 
                size="small" 
                sx={sxProps}
                className="settings-button"
                style={cutDisplay.moved === 'greyed' ? selectedStyleObject : styleObject}
                onClick={() => changeCutDisplay('moved', 'greyed')}>Greyed Out</Button>
                <Button 
                variant="contained" 
                size="small" 
                sx={sxProps}
                className="settings-button"
                style={cutDisplay.moved === 'lines' ? selectedStyleObject : styleObject}
                onClick={() => changeCutDisplay('moved', 'lines')}>Dashed Line</Button>
                <Button 
                variant="contained" 
                size="small" 
                sx={sxProps}
                className="settings-button"
                style={cutDisplay.moved === 'none' ? selectedStyleObject : styleObject}
                onClick={() => changeCutDisplay('moved', 'none')}> Fully Hidden</Button>
            </div>
        </div>
    )
}

export default SettingsPage;