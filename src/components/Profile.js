var React = require('react');
var Router = require('react-router');

module.exports = React.createClass({
  displayName: 'Profile',

  contextTypes: {
    user: React.PropTypes.object.isRequired
  },

  render: function() {
    var user = this.context.user;

    return (
      <div className="card profile">
        <div className="card-block">
          <img
            className="img-circle avatar"
            src={user.data.avatar} />
          <h4 className="card-title">
            Hi {user.data.nickname}!
          </h4>
          <div className="card-text">
            <p>You have permission to perform the following:</p>
            <ul className="permissions">
              <li>Create Tweets</li>
              <li>Edit your own tweets</li>
              <li>Delete your own tweets</li>
            </ul>
          </div>
          <Router.Link className="btn btn-primary" to="/logout">
            Logout
          </Router.Link>
        </div>
      </div>
    );
  }

});
