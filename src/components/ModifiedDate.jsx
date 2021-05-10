/*eslint-disable */

import { useEffect, useState } from "react";

export const ModifiedDate = (props) => {
    const [date, setDate] = useState("");

    useEffect(() => {
        setDate(props.notes[props.selectedNote].date);
    }, [props.notes, props.selectedNote]);

    return <h2><i>Last modified {date}.</i></h2>
}