var React = require('react');
var AuthorizationGenerator = require('lore-auth').AuthorizationGenerator;

module.exports = AuthorizationGenerator({
  wrapperDisplayName: 'UserCanDeleteTweet',

  propTypes: {
    tweet: React.PropTypes.object.isRequired
  },

  contextTypes: {
    user: React.PropTypes.object.isRequired
  },

  isAuthorized: function(storeState) {
    var tweet = this.props.tweet;
    var user = this.context.user;

    return tweet.data.userId === user.id;
  }
});
