import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer id="footer">
        {this.props.children}
      </footer>
    );
  }
}

export default Footer;
