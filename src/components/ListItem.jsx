import { DeleteButton } from "./DeleteButton";

export const ListItem = (props) => {
    return (
        <div
            className="side-item no-sel"
            onClick={() => props.onSelectNote(props.noteIndex)}
            style={
                props.noteIndex === props.selectedNote ?
                    { backgroundColor: '#424242' } :
                    { backgroundColor: '#292929' }
            }
        >
            <div className="side-item-info">
                <h1>{props.title === "" ? "New Note" : props.title}</h1>
                <h2>{props.date}</h2>
            </div>
            <div className="side-item-lower">
                <p>{props.content}</p>
                <DeleteButton onDeleteNote={props.onDeleteNote} noteIndex={props.noteIndex} />
            </div>
        </div>
    );
}