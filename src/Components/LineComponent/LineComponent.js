import './LineComponent.scss'
import { useState } from 'react'
import { IconButton } from '@mui/material'
import { Autorenew, Loop } from '@mui/icons-material'

function LineComponent({line, viewType, cutTrigger, setcutTrigger}) {
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

const relevantNotes = line.Notes.filter(note => note.Type === viewType).sort((a, b) => a.words[0] - b.words[0])

if (!line.cutType || line.cutType === 'none') {
return (
    <p className={lineType + ' line-container'} >
        <span>
        {content}
        {line.altContent && !alt && <IconButton onClick={swapContent}><Autorenew/></IconButton>}
        {line.altContent && alt && <IconButton onClick={swapContent}><Loop /></IconButton>}
        </span>
        <span className='line-num'>
        {line.lineNum}
        </span>
    </p>
)
} else {
    return (
        <hr></hr>
    )
}

}

export default LineComponent