import './ReaderComponent.scss'
import { useState } from 'react'
import NoteModal from '../NoteModal/NoteModal'
import { IconButton } from '@mui/material'
import { Autorenew, Loop } from '@mui/icons-material'

function ReaderComponent({line, noteId, cutDisplay}) {
const lineType = line.Type.split(' ').join('-')

const [alt, setAlt] = useState(false)

let relevantNotes = line.Notes.filter(note => (note.type === 'gloss'))
relevantNotes.sort((a, b) => a.words[0] - b.words[0])


let content = ''
if (!alt) {
    content = line.Content
    relevantNotes = relevantNotes.filter(note => !note.altNote)
} else {
    content = line.altContent
    relevantNotes = relevantNotes.filter(note => note.altNote)
}

const swapContent = () => {
setAlt(!alt)
}

if (relevantNotes.length === 4) {
    console.log(noteId)
    console.log(line.Content)
    console.log(relevantNotes)
}

if (line.cutType && line.cutType !== 'none') {
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
            <p className={lineType + ' line-container'} >
            <span className='cutLine'>
            {content.join(' ')}
            {line.altContent && !alt && <IconButton onClick={swapContent}><Autorenew/></IconButton>}
            {line.altContent && alt && <IconButton onClick={swapContent}><Loop /></IconButton>}
            </span>
            <span className='line-num cutLine'>
        {line.lineNum}
        </span>
        </p>
        )
    }
} else if (relevantNotes.length === 0) {
    return (
        <p className={lineType + ' line-container'} >
        <span>
        {content.join(' ')}
        {line.altContent && !alt && <IconButton onClick={swapContent}><Autorenew/></IconButton>}
        {line.altContent && alt && <IconButton onClick={swapContent}><Loop /></IconButton>}
        </span>
        <span className='line-num'>
        {line.lineNum}
        </span>
    </p>
    )
} else if (relevantNotes.length === 1) {
return (
    <div>
    <p className={lineType + ' line-container'} >
          <span className='lineContent'>
          <span className='beforeNote1'>
            {content.slice(0, (relevantNotes[0].words[0])).join(' ') + ' '} 
          </span>
          { (relevantNotes[0].type === 'gloss') && <span class="above">{content.slice((relevantNotes[0].words[0]), (relevantNotes[0].words[relevantNotes[0].words.length - 1] + 1)).join(' ')}
            <span class="belowgloss">{relevantNotes[0].synonym}</span></span>
           }
          <span className='afterNote1'>{ ' ' + content.slice((relevantNotes[0].words[relevantNotes[0].words.length - 1] + 1)).join(' ')}</span>
          {line.altContent && !alt && <IconButton onClick={swapContent}><Autorenew/></IconButton>}
          {line.altContent && alt && <IconButton onClick={swapContent}><Loop /></IconButton>}
          </span>
          <span className='line-num'>
            {line.lineNum}
          </span>
    </p>
    </div>
)
} else if (relevantNotes.length === 2) {
return (
    <div>
    <p className={lineType + ' line-container'} >
          <span className='lineContent'>
            <span className='beforeNote1'>
                {content.slice(0, (relevantNotes[0].words[0])).join(' ') + ' '} 
            </span>
            { (relevantNotes[0].type === 'gloss') && <span class="above">{content.slice((relevantNotes[0].words[0]), (relevantNotes[0].words[relevantNotes[0].words.length - 1] + 1)).join(' ')}
            <span class="belowgloss">{relevantNotes[0].synonym}</span></span>
           }
            <span className='afterNote1'>{ ' ' + content.slice((relevantNotes[0].words[relevantNotes[0].words.length - 1] + 1), relevantNotes[1].words[0]).join(' ') + ' '}</span>
            { (relevantNotes[1].type === 'gloss') && <span class="above">{content.slice((relevantNotes[1].words[0]), (relevantNotes[1].words[relevantNotes[1].words.length - 1] + 1)).join(' ')}
            <span class="belowgloss">{relevantNotes[1].synonym}</span></span>
           }
            <span className='afterNote2'>{ ' ' + content.slice((relevantNotes[1].words[relevantNotes[1].words.length - 1] + 1)).join(' ')}</span>
            {line.altContent && !alt && <IconButton onClick={swapContent}><Autorenew/></IconButton>}
            {line.altContent && alt && <IconButton onClick={swapContent}><Loop /></IconButton>}
          </span>
          <span className='line-num'>
            {line.lineNum}
          </span>
    </p>
    </div>
)
} else if (relevantNotes.length === 3) {
return (
    <div>
    <p className={lineType + ' line-container'} >
          <span className='lineContent'>
            <span className='beforeNote1'>
                {content.slice(0, (relevantNotes[0].words[0])).join(' ') + ' '} 
            </span>
            { (relevantNotes[0].type === 'gloss') && <span class="above">{content.slice((relevantNotes[0].words[0]), (relevantNotes[0].words[relevantNotes[0].words.length - 1] + 1)).join(' ')}
            <span class="belowgloss">{relevantNotes[0].synonym}</span></span>
           }
            <span className='afterNote1'>{ ' ' + content.slice((relevantNotes[0].words[relevantNotes[0].words.length - 1] + 1), relevantNotes[1].words[0]).join(' ') + ' '}</span>
            { (relevantNotes[1].type === 'gloss') && <span class="above">{content.slice((relevantNotes[1].words[0]), (relevantNotes[1].words[relevantNotes[1].words.length - 1] + 1)).join(' ')}
            <span class="belowgloss">{relevantNotes[1].synonym}</span></span>
           }
            <span className='afterNote2'>{ ' ' + content.slice((relevantNotes[1].words[relevantNotes[1].words.length - 1] + 1), relevantNotes[2].words[0]).join(' ') + ' '}</span>
            { (relevantNotes[2].type === 'gloss') && <span class="above">{content.slice((relevantNotes[2].words[0]), (relevantNotes[2].words[relevantNotes[2].words.length - 1] + 1)).join(' ')}
            <span class="belowgloss">{relevantNotes[2].synonym}</span></span>
           }
            <span className='afterNote3'>{ ' ' + content.slice((relevantNotes[2].words[relevantNotes[2].words.length - 1] + 1)).join(' ')}</span>
            {line.altContent && !alt && <IconButton onClick={swapContent}><Autorenew/></IconButton>}
            {line.altContent && alt && <IconButton onClick={swapContent}><Loop /></IconButton>}
          </span>
          <span className='line-num'>
            {line.lineNum}
          </span>
    </p>
    </div>
)
}

}

export default ReaderComponent