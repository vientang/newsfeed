import React from 'react';
import turbo from 'turbo360';
import { connect } from 'react-redux';
import actions from '../../actions';
import { Search, Nav, MiniPost, GetInTouch, Footer } from './index';

class Sidebar extends React.Component {
  constructor() {
    super();
    this.state = {
      feed: {
        name: '',
        url: ''
      }
    };
    this.updateFeed = this.updateFeed.bind(this);
    this.addFeed = this.addFeed.bind(this);
  };

  componentDidMount() {
    this.props.fetchFeeds()
      .then(data => { 
        this.setState({ feeds: data }) 
      })
      .catch(err => { console.log('Error: ', err.message) });
  }

  updateFeed(event) {
    const feed = Object.assign({}, this.state.feed);
    feed[event.target.name] = event.target.value;
    this.setState({ feed });
  };

  addFeed(event) {
    event.preventDefault();
    // TODO: Debug - addFeed currently not being called
    // possible webpack version conflicts
    this.props.createFeed(this.state.feed)
      .then(data => {
        console.log('Add feed: ' + JSON.stringify(data));
        // Clear input field after adding a feed
        this.setState({ 
          feed: {
            name: '',
            url: ''
          }
        });
      })
      .catch(err => { console.log('error', err.message) });
  };

  render() {
    const feeds = this.props.feed.all;
    const { name, url } = this.state.feed.name;
    return (
      <div id="sidebar">
        <div className="inner">
          <Search 
            onHandleUpdateFeed={this.updateFeed} 
            onHandleAddFeed={this.addFeed}
            name={name}
            url={url} 
          />
          <Nav />
          <MiniPost />
          <GetInTouch />
          <Footer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    feed: state.feed
  }
}

const dispatchToProps = (dispatch) => {
  return {
    fetchFeeds: (params) => dispatch(actions.fetchFeeds(params)),
    createFeed: (params) => dispatch(actions.createFeed(params)),
  }
}

export default connect(mapStateToProps, dispatchToProps)(Sidebar);
