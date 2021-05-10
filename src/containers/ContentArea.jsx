import { Content } from "../components/Content"
import { ModifiedDate } from "../components/ModifiedDate"
import { Title } from "../components/Title"

export const ContentArea = (props) => {
    return (
        <div className="content">
            <Title notes={props.notes} selectedNote={props.selectedNote} onTitleInput={props.onTitleInput} />
            <ModifiedDate notes={props.notes} selectedNote={props.selectedNote} />
            <Content notes={props.notes} selectedNote={props.selectedNote} onContentInput={props.onContentInput} />
        </div>
    );
}