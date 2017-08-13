import React from 'react';

const Search = ({ onHandleUpdateFeed, onHandleAddFeed }) => {
  return (
    <section id="search" className="alt">
      <input 
        type="text" 
        name="name" 
        id="query" 
        placeholder="Feed Name" 
        onChange={onHandleUpdateFeed}
      />
      <input 
        type="text" 
        name="url" 
        id="query" 
        placeholder="Feed URL" 
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