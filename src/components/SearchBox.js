import React, { useState } from "react";
import "./SearchBox.css";
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/Button';

const SearchBox = ({ onSearch }) => {
    const [searchInput, setSearchInput] = useState("");

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            triggerSearch();
        }
    };

    const triggerSearch = () => {
        if (searchInput.trim()) {
            onSearch(searchInput.trim().toLowerCase());
        }
    };

    return (
        <div className="search-box">
            <input
                type="text"
                placeholder="Search for a Pokemon"
                className="search-input"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyPress={handleKeyPress}
            />
            <IconButton
                className="search-button"
                onClick={triggerSearch}
                aria-label="search"
                size="medium"
            >
                <SearchIcon 
                    className="search-icon"
                />
            </IconButton>
        </div>
    )
}

export default SearchBox;