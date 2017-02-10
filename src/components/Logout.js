var React = require('react');
var auth = require('../utils/auth');

module.exports = React.createClass({
  displayName: 'Logout',

  propTypes: {
    router: React.PropTypes.object.isRequired
  },

  componentDidMount: function(){
    auth.deleteToken();
    this.props.router.push('/');
  },

  render: function() {
    return (
      <h1 className="loading-text">
        Logging out...
      </h1>
    );
  }

});
