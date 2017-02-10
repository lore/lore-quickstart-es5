var React = require('react');
var Tweet = require('./Tweet');

module.exports = lore.connect(function(getState, props){
  return {
    tweets: getState('tweet.find')
  }
})(
React.createClass({
  displayName: 'Feed',

  propTypes: {
    tweets: React.PropTypes.object.isRequired
  },

  renderTweet: function(tweet) {
    return (
      <Tweet key={tweet.id} tweet={tweet} />
    );
  },

  render: function() {
    var tweets = this.props.tweets;

    return (
      <div className="feed">
        <h2 className="title">
          Feed
        </h2>
        <ul className="media-list tweets">
          {tweets.data.map(this.renderTweet)}
        </ul>
      </div>
    );
  }
})
);
