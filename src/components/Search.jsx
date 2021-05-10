export const Search = (props) => {
    return <input type="text" placeholder="Search notes..." onChange={props.onSearch}></input>
}