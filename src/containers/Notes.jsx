import { useState, useEffect } from 'react';
import { ContentArea } from "./ContentArea"
import { SideBar } from "./Sidebar";
import { v4 as uuidv4 } from 'uuid';

const defaultNote = {
    key: uuidv4(),
    title: "",
    date: new Date().toLocaleDateString('en-US'),
    content: ""
};

export const Notes = () => {
    const [notes, setNotes] = useState([defaultNote]);
    const [filteredNotes, setFilteredNotes] = useState(notes);
    const [currentNote, setCurrentNote] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");

    // add new note to notes state array
    const handleNewNote = () => {
        setNotes((prev) => ([
            {
                key: uuidv4(),
                title: "",
                date: new Date().toLocaleDateString('en-US'),
                content: ""
            },
            ...prev
        ]));
        setCurrentNote(prev => prev + 1);
    }

    const handleDeleteNote = (index) => {
        if (notes.length <= 1) return;
        if (index <= currentNote && currentNote !== 0) setCurrentNote(prev => prev - 1);
        let deletedUUID = filteredNotes[index].key;
        setNotes(prev => prev.filter(n => n.key !== deletedUUID));
    }

    const handleSelectNote = (index) => {
        setCurrentNote(index);
    }

    const handleContentChange = (e) => {
        let notesCopy = notes.slice();
        notesCopy[currentNote].content = e.target.value;
        notesCopy[currentNote].date = new Date().toLocaleDateString('en-US');
        setNotes(notesCopy);
    }

    const handleTitleChange = (e) => {
        let notesCopy = notes.slice();
        notesCopy[currentNote].title = e.target.value;
        notesCopy[currentNote].date = new Date().toLocaleDateString('en-US');
        setNotes(notesCopy);
    }

    const handleSearch = ({ target: { value: v } }) => {
        setSearchTerm(v);
    }

    useEffect(() => {
        let notesCopy = notes.slice();
        setFilteredNotes(notesCopy.filter((note) => {
            return (
                note.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                note.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }));
    }, [notes, searchTerm]);

    return (
        <>
            <SideBar
                notes={filteredNotes}
                selectedNote={currentNote}
                onSelectNote={handleSelectNote}
                onNewNote={handleNewNote}
                onDeleteNote={handleDeleteNote}
                onSearch={handleSearch}
            />
            <ContentArea
                notes={notes}
                selectedNote={currentNote}
                onTitleInput={handleTitleChange}
                onContentInput={handleContentChange}
            />
        </>
    );
}