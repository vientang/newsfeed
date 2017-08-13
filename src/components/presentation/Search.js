import React from 'react';

const Search = ({ onHandleUpdateFeed, onHandleAddFeed, name, url }) => {
  // Value props make inputs controlled components
  return (
    <section id="search" className="alt">
      <input 
        type="text" 
        name="name" 
        id="query" 
        placeholder="Feed Name" 
        value={name}
        onChange={onHandleUpdateFeed}
      />
      <input 
        type="text" 
        name="url" 
        id="query" 
        placeholder="Feed URL" 
        value={url}
        onChange={onHandleUpdateFeed}
      />
      <button 
        onClick={onHandleAddFeed}
      >
        ADD FEED
      </button>
    </section>
  );
}

export default Search;
