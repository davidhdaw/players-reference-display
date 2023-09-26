import './StudentComponent.scss'
import { useState } from 'react'
import { IconButton } from '@mui/material'
import { SyncAlt } from '@mui/icons-material'
import NoteModal from '../NoteModal/NoteModal'

function StudentComponent({line, noteId, openNote, setOpenNote, cutDisplay, altOption}) {
const lineType = line.Type.split(' ').join('-')

const [alt, setAlt] = useState(false)

let relevantNotes = line.Notes.filter(note => note.type === 'student')
relevantNotes.sort((a, b) => a.words[0] - b.words[0])

let content = ''
if (!alt) {
    content = line.Content
    relevantNotes = relevantNotes.filter(note => !note.altNote)
} else {
    content = line.altContent
    relevantNotes = relevantNotes.filter(note => note.altNote)
}

if (relevantNotes.length !== 0) {
  console.log(relevantNotes)
}


const swapContent = () => {
setAlt(!alt)
}
const setNote = (note) => {
    if (note !== openNote) {
    setOpenNote(note)
    } else {
    setOpenNote('')
    }
}

if (line.cutType && line.cutType !== 'none') {
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
            <span>
            {content.join(' ')}
            </span>
            <span className='alt-button'>            
            {line.altContent && altOption && !alt && <IconButton onClick={swapContent}><SyncAlt/></IconButton>}
            {line.altContent && altOption && alt && <IconButton onClick={swapContent}><span className='q2Button'>Q2</span></IconButton>}
            </span>
        </p>
        )
    }
} else if (relevantNotes.length === 0) {
    return (
        <p className={lineType + ' line-container'} >
        <span>
        {content.join(' ')}
        </span>
        <span className='alt-button'>            
            {line.altContent && altOption && !alt && <IconButton onClick={swapContent}><SyncAlt/></IconButton>}
            {line.altContent && altOption && alt && <IconButton onClick={swapContent}><span className='q2Button'>Q2</span></IconButton>}
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
          {(relevantNotes[0].type === 'student') && 
                    <span className="StudentNote" onClick={() => setNote(noteId + 's0')} >{content.slice((relevantNotes[0].words[0]), (relevantNotes[0].words[relevantNotes[0].words.length - 1] + 1)).join(' ')}
                    </span>
        }
          <span className='afterNote1'>{ ' ' + content.slice((relevantNotes[0].words[relevantNotes[0].words.length - 1] + 1)).join(' ')}</span>
          </span>
          <span className='alt-button'>            
          {line.altContent && altOption && !alt && <IconButton onClick={swapContent}><SyncAlt/></IconButton>}
            {line.altContent && altOption && alt && <IconButton onClick={swapContent}><span className='q2Button'>Q2</span></IconButton>}
          </span>
    </p>
    { (openNote === (noteId + 's0')) && <NoteModal setOpenNote={setOpenNote} note={relevantNotes[0]} />}
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
            {(relevantNotes[0].type === 'student') && 
                    <span className="StudentNote" onClick={() => setNote(noteId + 's0')} >{content.slice((relevantNotes[0].words[0]), (relevantNotes[0].words[relevantNotes[0].words.length - 1] + 1)).join(' ')}
                    </span>
            }
            <span className='afterNote1'>{ ' ' + content.slice((relevantNotes[0].words[relevantNotes[1].words.length - 1] + 1), relevantNotes[1].words[0]).join(' ') + ' '}</span>
            {(relevantNotes[1].type === 'student') && 
                    <span className="StudentNote" onClick={() => setNote(noteId + 's1')} >{content.slice((relevantNotes[1].words[0]), (relevantNotes[1].words[relevantNotes[1].words.length - 1] + 1)).join(' ')}
                    </span>
            }
            <span className='afterNote2'>{ ' ' + content.slice((relevantNotes[1].words[relevantNotes[1].words.length - 1] + 1)).join(' ')}</span>
          </span>
          <span className='alt-button'>            
          {line.altContent && altOption && !alt && <IconButton onClick={swapContent}><SyncAlt/></IconButton>}
            {line.altContent && altOption && alt && <IconButton onClick={swapContent}><span className='q2Button'>Q2</span></IconButton>}
          </span>
    </p>
    { (openNote === (noteId + 's0')) && <NoteModal setOpenNote={setOpenNote} note={relevantNotes[0]} />}
    { (openNote === (noteId + 's1')) && <NoteModal setOpenNote={setOpenNote} note={relevantNotes[1]} />}
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
            {(relevantNotes[0].type === 'student') && 
                    <span className="StudentNote" onClick={() => setNote(noteId + 's0')} >{content.slice((relevantNotes[0].words[0]), (relevantNotes[0].words[relevantNotes[0].words.length - 1] + 1)).join(' ')}
                    </span>
            }
            <span className='afterNote1'>{ ' ' + content.slice((relevantNotes[0].words[relevantNotes[0].words.length - 1] + 1), relevantNotes[1].words[0]).join(' ') + ' '}</span>
            {(relevantNotes[1].type === 'student') && 
                    <span className="StudentNote" onClick={() => setNote(noteId + 's1')} >{content.slice((relevantNotes[1].words[0]), (relevantNotes[1].words[relevantNotes[1].words.length - 1] + 1)).join(' ')}
                    </span>
            }
            <span className='afterNote2'>{ ' ' + content.slice((relevantNotes[1].words[relevantNotes[1].words.length - 1] + 1), relevantNotes[2].words[0]).join(' ') + ' '}</span>
            {(relevantNotes[2].type === 'student') && 
                    <span className="StudentNote" onClick={() => setNote(noteId + 's2')} >{content.slice((relevantNotes[2].words[0]), (relevantNotes[2].words[relevantNotes[2].words.length - 1] + 1)).join(' ')}
                    </span>
            }
            <span className='afterNote3'>{ ' ' + content.slice((relevantNotes[2].words[relevantNotes[2].words.length - 1] + 1)).join(' ')}</span>
          </span>
          <span className='alt-button'>            
          {line.altContent && altOption && !alt && <IconButton onClick={swapContent}><SyncAlt/></IconButton>}
            {line.altContent && altOption && alt && <IconButton onClick={swapContent}><span className='q2Button'>Q2</span></IconButton>}
          </span>
    </p>
    { (openNote === (noteId + 's0')) && <NoteModal setOpenNote={setOpenNote} note={relevantNotes[0]} />}
    { (openNote === (noteId + 's1')) && <NoteModal setOpenNote={setOpenNote} note={relevantNotes[1]} />}
    { (openNote === (noteId + 's2')) && <NoteModal setOpenNote={setOpenNote} note={relevantNotes[2]} />}
    </div>
)
}

}

export default StudentComponent