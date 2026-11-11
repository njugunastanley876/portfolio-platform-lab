import React from 'react';

function SearchFilter({ searchQuery, onSearchChange }) {
    return (
        <div className="mb-4">
            <input 
            type="text"
            className="form-control form-control-lg shadow-sm"
            placeholder="search projects"
            value={searchQuery}
            onchange={(e) => onSearchChange(e.target.value)}
            />
        </div>
    );
}

export default SearchFilter;