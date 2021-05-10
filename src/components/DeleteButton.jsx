export const DeleteButton = (props) => {
    const stopPropagation = (e) => {
        e.stopPropagation();
        props.onDeleteNote(props.noteIndex);
    } 

    return <div className="delete-button" onClick={stopPropagation}><div>🗙</div></div>
}