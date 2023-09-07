import React from "react";
import ActContainer from "../ActContainer/ActContainer";
import "./PlayContainer.scss";
function PlayContainer({play}) {

    return(
        <div className='playContainer'>
            {
                play.map((act, index) => (
                    <ActContainer acti={index} act={act} />
                ))
            }
        </div>
    )
}

export default PlayContainer;