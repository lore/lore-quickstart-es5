var React = require('react');
var Router = require('react-router');

module.exports = React.createClass({
  displayName: 'Filter',

  contextTypes: {
    user: React.PropTypes.object.isRequired
  },

  render: function() {
    var user = this.context.user;

    return (
      <div className="filter">
        <ul className="list-group">
          <Router.IndexLink
            className="list-group-item"
            activeClassName="active" to="/">
            Feed
          </Router.IndexLink>
          <Router.Link
            className="list-group-item"
            activeClassName="active"
            to={"/users/" + user.id}>
            My Tweets
          </Router.Link>
        </ul>
      </div>
    );
  }

});
