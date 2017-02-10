var React = require('react');
var auth = require('../utils/auth');
var ActionTypes = require('lore-utils').ActionTypes;

module.exports = React.createClass({
  displayName: 'Logout',

  propTypes: {
    router: React.PropTypes.object.isRequired
  },

  componentDidMount: function(){
    auth.deleteToken();
    lore.store.dispatch({
      type: ActionTypes.RESET_STORE,
      payload: {}
    });
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
