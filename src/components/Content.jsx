export const Content = (props) => {
    return <textarea
        placeholder="Enter note here..."
        onInput={props.onContentInput}
        value={props.notes[props.selectedNote].content} >
    </textarea>
}