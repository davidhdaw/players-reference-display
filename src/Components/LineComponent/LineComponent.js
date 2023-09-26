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

if (!line.cutType || line.cutType === 'none') {
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
    if (cutDisplay === 'none') {
        return (
            <span></span>
        )
    }
    else if (cutDisplay === 'lines') {
    return (
        <hr className="hiddenLine"></hr>
    )
    } else if (cutDisplay === 'greyed') {
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