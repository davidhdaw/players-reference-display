import React from "react";
import ActContainer from "../ActContainer/ActContainer";
import "./PlayContainer.scss";
import { useState } from "react";
function PlayContainer({play, viewMode, cutDisplay}) {

    const [openNote, setOpenNote] = useState('')

    return(
        <div className='playContainer'>
            {
                play.map((act, index) => (
                    <ActContainer acti={index} act={act} openNote={openNote} setOpenNote={setOpenNote} viewMode={viewMode} cutDisplay={cutDisplay} />
                ))
            }
        </div>
    )
}

export default PlayContainer;