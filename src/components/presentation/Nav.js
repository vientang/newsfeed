import React from 'react';

const Nav = ({ feeds }) => {
  return (
    <nav id="menu">
      <header className="major">
        <h2>My Feeds</h2>
      </header>
      <ul>
        { feeds.map(feed => {
          return (
            <li key={feed.id}>
              <a href="#">{feed.name}</a>
            </li>
          )
        })}
      </ul>
    </nav>
  );
}

export default Nav;
