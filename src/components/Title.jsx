export const Title = (props) => {
    return <input
        className="title-input"
        type="text"
        placeholder="New Note..."
        onInput={props.onTitleInput}
        value={props.notes[props.selectedNote].title} />
}