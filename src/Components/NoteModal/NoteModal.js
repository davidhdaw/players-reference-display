import { Close } from '@mui/icons-material';
import './NoteModal.scss'
import CloseIcon from '@mui/icons-material/Close';

function NoteModal({note, setOpenNote}) {

    if (note.type === 'scansion') {
    return(
        <div className={note.type + 'Modal noteModal'} >
        <h2 className='modal-header'>
            <span>
            {note.header}
            </span>
            <CloseIcon className='close-button' onClick={e => (setOpenNote(''))} />
        </h2>
        <p>{note.pronounciation}</p>
        <p>Rule: {note.rule}</p>
        <p>{note.noteContent}</p>

        </div>
    )
    } else if (note.type === 'student' || note.type === 'performance') {
        return(
            <div className={note.type + 'Modal noteModal'} >
            <h2 className='modal-header'>
                <span>
                {note.header}
                </span>
                <CloseIcon className='close-button' onClick={e => (setOpenNote(''))} />
            </h2>
            <p>{note.noteContent}</p>
            </div>
        )
    }
}

export default NoteModal;