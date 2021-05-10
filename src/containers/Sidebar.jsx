import { ListItem } from "../components/ListItem"
import { NewButton } from "../components/NewButton"
import { Search } from "../components/Search"

export const SideBar = (props) => {
    return (
        <div className="side-nav">
            <div className="top-bar">
                <NewButton onNewNote={props.onNewNote} />
                <Search onSearch={props.onSearch} />
            </div>
            {
                props.notes.map(
                    ({ title, date, content, key }, i) =>
                        <ListItem
                            key={key}
                            title={title}
                            date={date}
                            content={content}
                            onSelectNote={props.onSelectNote}
                            noteIndex={i}
                            selectedNote={props.selectedNote}
                            onDeleteNote={props.onDeleteNote}
                        />
                )
            }
        </div>
    );
}