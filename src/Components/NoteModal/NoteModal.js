import './NoteModal.scss'

function NoteModal({note}) {

    if (note.type === 'scansion') {
    return(
        <div className="noteModal">
        <h2 className='scansionHeader'>{note.header}</h2>
        <p>{note.pronounciation}</p>
        <p>Rule: {note.rule}</p>
        <p>{note.noteContent}</p>

        </div>
    )
    } else if (note.type === 'student' || note.type === 'performance') {
        return(
            <div className="noteModal">
            {note.type === 'student' && <h2 className='studentHeader'>{note.header}</h2>}
            {note.type === 'performance' && <h2 className='performanceHeader'>{note.header}</h2>}
            <p>{note.noteContent}</p>
            </div>
        )
    }
}

export default NoteModal;