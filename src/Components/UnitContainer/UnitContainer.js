import React from "react";
import LineComponent from "../LineComponent/LineComponent";
import PerformerComponent from "../PerformerComponent/PerformerComponent";
import ReaderComponent from "../ReaderComponent/ReaderComponent";
import StudentComponent from "../StudentComponent/StudentComponent";
import "./UnitContainer.scss";

function UnitContainer({uniti, unit, acti, openNote, setOpenNote, viewMode, cutDisplay, altOption}) {
    const unitId = 'unit' + acti + uniti
    const noteId = 'a' + acti + 'u' + uniti

    return(
        <div className='unit-container' id={unitId}>
            <div className='unit-info'>
            <h1 className='unit-heading'>Unit {uniti+1} | {unit.data}</h1>
            <h3 className='unit-location'>{unit.location}</h3>
            <h3 className='unit-description'>{unit.description}</h3>
            </div>
            <div className='unit-lines'>
            { viewMode === 'Basic' && unit.lines.map((line) => (
               <LineComponent line={line} cutDisplay={cutDisplay} altOption={altOption}  />    
            ))}
            { viewMode === 'Reader' && unit.lines.map((line, i) => (
                <ReaderComponent line={line} noteId={noteId + 'l' + i} openNote={openNote} setOpenNote={setOpenNote} cutDisplay={cutDisplay} altOption={altOption} />
            ))}
            { viewMode === 'Performer' && unit.lines.map((line, i) => (
                <PerformerComponent line={line} noteId={noteId + 'l' + i} openNote={openNote} setOpenNote={setOpenNote} cutDisplay={cutDisplay} altOption={altOption} />
            ))}
            { viewMode === 'Student' && unit.lines.map((line, i) => (
                <StudentComponent line={line} noteId={noteId + 'l' + i} openNote={openNote} setOpenNote={setOpenNote} cutDisplay={cutDisplay} altOption={altOption} />
            ))}
            </div>
        </div>
    )
}

export default UnitContainer;