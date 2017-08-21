import React from 'react';
import turbo from 'turbo360';
import { MiniPost, GetInTouch, Footer } from './index';
import { Feeds, Search } from '../containers';

const Sidebar = () => {
  return (
    <div id="sidebar">
      <div className="inner">
        <Search />
        <Feeds />
        <MiniPost />
        <GetInTouch />
        <Footer />
      </div>
    </div>
  );
}

export default Sidebar;
