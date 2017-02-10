var React = require('react');
var Router = require('react-router');

module.exports = React.createClass({
  displayName: 'Profile',

  propTypes: {
    user: React.PropTypes.object.isRequired
  },

  getDefaultProps: function() {
    return {
      user: {
        id: 1,
        data: {
          nickname: 'marle',
          avatar: 'https://cloud.githubusercontent.com/assets/2637399/19027074/a37105c0-88e1-11e6-9645-3e1af37671f7.png'
        }
      }
    }
  },

  render: function() {
    var user = this.props.user;

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
