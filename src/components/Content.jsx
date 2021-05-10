/*eslint-disable */

import { useEffect, useState } from "react"

export const Content = (props) => {
    const [content, setContent] = useState("");

    useEffect(() => {
        setContent(props.notes[props.selectedNote].content);
    }, [props.selectedNote]);

    return (<div
        suppressContentEditableWarning={true}
        className="text-area"
        contentEditable="true"
        placeholder="Write something here..."
        onInput={props.onContentInput}
    >
        {content}
    </div>);
}