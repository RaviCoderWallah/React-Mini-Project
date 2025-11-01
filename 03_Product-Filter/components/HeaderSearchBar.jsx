import { IoSearch } from "react-icons/io5";

const HeaderSearchBar = () => {
    return (
        <div className="header-search-bar">
            <h1>All Notes</h1>
            <div className="search-bar-container">
                 <IoSearch />
                <input type="text" placeholder="Search notes..." id="search-bar"/>
            </div>
        </div>
    )
}

export default HeaderSearchBar