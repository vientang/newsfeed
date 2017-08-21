import React from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';

class Feeds extends React.Component {
  constructor() {
    super();
    this.state = {
      feeds: []
    }
  }

  componentDidMount() {
    this.props.fetchFeeds(null)
      .then(data => { 
        this.setState({ feeds: data }) 
      })
      .catch(err => { console.log('Error: ', err.message) });
  };

  selectFeed(feed, event) {
    event.preventDefault();
    console.log('feed', JSON.stringify(feed));
    this.props.selectFeed(feed);
  };

  render() {
    const feeds = this.state.feeds.all || [];
    return (
      <nav id="menu">
        <header className="major">
          <h2>Feeds Container</h2>
        </header>
        <ul>
          { feeds.map(feed => {
            const color = (feed === this.props.feed.selected) ? 'red' : '#333';
            return (
              <li key={feed.id}>
                <a 
                  href="#"
                  style={{color: color}}
                  onClick={this.selectFeed.bind(this, feed)}
                >
                  {feed.name}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    );
  }
}

const stateToProps = (state) => {
  return {
    feeds: state.feed.all
  }
}

const dispatchToProps = (dispatch) => {
  return {
    fetchFeeds: (params) => dispatch(actions.fetchFeeds(params)),
    selectFeed: (feed) => dispatch(actions.selectFeed(feed)),
  }
}

export default connect(stateToProps, dispatchToProps)(Feeds);
