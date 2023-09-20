import './LineComponent.scss'
import { useState } from 'react'
import { IconButton } from '@mui/material'
import { Autorenew, Loop } from '@mui/icons-material'

function LineComponent({line, viewType, cutDisplay}) {
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
        <span>
        {content}
        {line.altContent && !alt && <IconButton onClick={swapContent}><Autorenew/></IconButton>}
        {line.altContent && alt && <IconButton onClick={swapContent}><Loop /></IconButton>}
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
        <hr></hr>
    )
    } else if (cutDisplay === 'greyed') {
        return (
            <p className={lineType + ' cutLine'} >
            <span>
            {content}
            {line.altContent && !alt && <IconButton onClick={swapContent}><Autorenew/></IconButton>}
            {line.altContent && alt && <IconButton onClick={swapContent}><Loop /></IconButton>}
            </span>
        </p>
        )
    }
}
}

export default LineComponent