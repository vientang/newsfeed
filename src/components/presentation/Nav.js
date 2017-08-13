import React from 'react';
import { connect } from 'react-redux';

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

const mapStateToProps = (state) => {
  return {
    feeds: state.all
  }
}

export default connect(mapStateToProps)(Nav);
