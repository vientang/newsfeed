import React from 'react';
import turbo from 'turbo360';
import { Search, Nav, MiniPost, GetInTouch, Footer } from './index';

class Sidebar extends React.Component {
  constructor() {
    super();
    this.state = {
      feeds: [],
      feed: {
        name: '',
        url: ''
      }
    };
    this.updateFeed = this.updateFeed.bind(this);
    this.addFeed = this.addFeed.bind(this);
  };

  updateFeed(event) {
    const feed = Object.assign({}, this.state.feed);
    feed[event.target.name] = event.target.value;
    this.setState({ feed });
  };

  addFeed(event) {
    event.preventDefault();
    // TODO: Debug - addFeed currently not being called
    console.log('Add feed: ' + JSON.stringify(this.state.feed));
    const turboClient = turbo({
      site_id: '5990aa912015d500114ca4b7'
    });
    turboClient.create('feed', this.state.feed)
      .then(data => {
        const feeds = Object.assign([], this.state.feeds);
        feeds.push(data);
        this.setState({ feeds });
      })
      .catch(err => { console.log('error', err.message) });
  };

  render() {
    return (
      <div id="sidebar">
        <div className="inner">
          <Search onHandleUpdateFeed={this.updateFeed} onHandleAddFeed={this.addFeed} />
          <Nav feeds={this.state.feeds} />
          <MiniPost />
          <GetInTouch />
          <Footer>
            <p className="copyright">
              &copy; Turbo360<br />
              &copy; Images: <a href="https://unsplash.com">Unsplash</a>.<br />
              &copy; Design: <a href="https://html5up.net">HTML5 UP</a>.<br />
            </p>
          </Footer>
        </div>
      </div>
    );
  }
}

export default Sidebar;
