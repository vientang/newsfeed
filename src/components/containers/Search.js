import React from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';

class Search extends React.Component {
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

  updateFeed(event) {
    const feed = Object.assign({}, this.state.feed);
    feed[event.target.name] = event.target.value;
    this.setState({ feed });
  };

  addFeed(event) {
    console.log('addFeed', this.props.createFeed)
    event.preventDefault();
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
      .catch(err => { 
        console.log('Error:', err.message) 
      });
  };

  // Value props make inputs controlled components
  render() {
    const { name, url } = this.state;
    return (
      <section id="search" className="alt">
        <input 
          type="text" 
          name="name" 
          id="query" 
          placeholder="Feed Name" 
          value={name}
          onChange={this.updateFeed}
        />
        <input 
          type="text" 
          name="url" 
          id="query" 
          placeholder="Feed URL" 
          value={url}
          onChange={this.updateFeed}
        />
        <button
          onClick={this.addFeed}
        >
          ADD FEED
        </button>
      </section>
    );  
  }
}

const stateToProps = (state) => {
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

export default connect(stateToProps, dispatchToProps)(Search);
