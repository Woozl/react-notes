/*eslint-disable */

import { useEffect, useState } from "react";

export const Title = (props) => {
    const [title, setTitle] = useState(props.notes[props.selectedNote].title);

    useEffect(() => {
        setTitle(props.notes[props.selectedNote].title);
    }, [props.selectedNote]);

    return <h1
        suppressContentEditableWarning={true}
        className="title-area"
        contentEditable="true"
        placeholder="New Note..."
        onInput={props.onTitleInput}
    >
        {title}
    </h1>
}