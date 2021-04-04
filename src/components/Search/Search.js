import React from 'react';
import './Search.css'

const Search = () => {
    return (
    <div className="search-wrapper">
        <div className="search-container">
          <form role="search" method="get" className="search-form form" action>
            <label>
              <span className="screen-reader-text">Search for...</span>
              <input type="search" className="search-field" placeholder="Type something..." name="s" title />
            </label>
            <input type="Submit" className="search-submit search-button" defaultValue="" />
          </form>
        </div>
      </div>
    );
};

export default Search;