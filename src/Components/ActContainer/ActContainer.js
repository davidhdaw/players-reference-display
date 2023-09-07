import React from "react";
import UnitContainer from "../UnitContainer/UnitContainer";
import "./ActContainer.scss";

function ActContainer({acti, act}) {

    return(
        <div className='act-container'>
        {act.length !== 0 && <h1 className='act-heading'>Act {acti+1}</h1>}
        {
            act.map((unit, index) => (
                <div>
                <UnitContainer uniti={index} unit={unit} acti={acti} />
                </div>

            ))
        }
        </div>
    )
}

export default ActContainer;