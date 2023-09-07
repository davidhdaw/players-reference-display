import React from "react";
import LineComponent from "../LineComponent/LineComponent";
import "./UnitContainer.scss";
import { useState } from "react";

function UnitContainer({uniti, unit, acti}) {
    const [cutTrigger, setcutTrigger] = useState(false)
    const unitId = 'unit' + acti + uniti
    return(
        <div className='unit-container' id={unitId}>
            <div className='unit-info'>
            <h1 className='unit-heading'>Unit {uniti+1} | {unit.data}</h1>
            <h3 className='unit-location'>{unit.location}</h3>
            <h3 className='unit-description'>{unit.description}</h3>
            </div>
            <div className='unit-lines'>
            { unit.lines.map((line) => (
                !cutTrigger && <LineComponent line={line} cutTrigger={cutTrigger} setcutTrigger={setcutTrigger} />
            ))}
            </div>
        </div>
    )
}

export default UnitContainer;