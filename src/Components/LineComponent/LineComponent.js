import './LineComponent.scss'
import { useState } from 'react'
import { IconButton } from '@mui/material'
import { Autorenew, Loop, SyncAlt } from '@mui/icons-material'

function LineComponent({line, cutDisplay, altOption}) {
const lineType = line.Type.split(' ').join('-')

const [alt, setAlt] = useState(false)

let content = ''
if (!alt) {
    content = line.Content.join(' ')
} else {
    content = line.altContent.join(' ')
}

const swapContent = () => {
setAlt(!alt)
}

let thisCutType = ''
if (line.cutType === "Entire scene or chorus deleted from Q1") {
    thisCutType = cutDisplay.sceneDeleted
}
if (line.cutType === "Redundancy") {
    thisCutType = cutDisplay.redundancy
}
if (line.cutType === "Purple passage") {
    thisCutType = cutDisplay.purple
}
if (line.cutType === "Cut for length") {
    thisCutType = cutDisplay.cutForLength
}
if (line.cutType === "Shortening of female role(s)") {
    thisCutType = cutDisplay.shorteningFemales
}
if (line.cutType === "Relocated in Q1") {
    thisCutType = cutDisplay.moved
}

if (thisCutType === '') {
return (
    <p className={lineType + ' line-container'} >
        <span className='line-content'>
        {content}
        </span>
        <span className='alt-button'>            
            {line.altContent && altOption && !alt && <IconButton onClick={swapContent}><SyncAlt/></IconButton>}
            {line.altContent && altOption && alt && <IconButton onClick={swapContent}><span className='q2Button'>Q2</span></IconButton>}
        </span>
    </p>
)
} else {
    if (thisCutType === 'none') {
        return (
            <span></span>
        )
    }
    else if (thisCutType === 'lines') {
    return (
        <hr className="hiddenLine"></hr>
    )
    } else if (thisCutType === 'greyed') {
        return (
            <p className={lineType + ' cutLine'} >
            <span className='line-content'>
            {content}
            </span>
            <span className='alt-button'>            
            {line.altContent && altOption && !alt && <IconButton onClick={swapContent}><SyncAlt/></IconButton>}
            {line.altContent && altOption && alt && <IconButton onClick={swapContent}><span className='q2Button'>Q2</span></IconButton>}
            </span>
        </p>
        )
    }
}
}

export default LineComponent