var React = require('react');
var Tweet = require('./Tweet');
var PayloadStates = require('../constants/PayloadStates');
var Router = require('react-router');
var InfiniteScrolling = require('../decorators/InfiniteScrolling');
var LoadMoreButton = require('./LoadMoreButton');
var _ = require('lodash');

module.exports = lore.connect(function(getState, props){
  return {
    tweets: getState('tweet.find', {
      pagination: {
        page: props.location.query.page || '1'
      }
    })
  }
})(
InfiniteScrolling({ propName: 'tweets', modelName: 'tweet' })(
React.createClass({
  displayName: 'Feed',

  propTypes: {
    pages: React.PropTypes.array.isRequired,
    onLoadMore: React.PropTypes.func.isRequired
  },

  renderTweet: function(tweet) {
    return (
      <Tweet key={tweet.id || tweet.cid} tweet={tweet} />
    );
  },

  render: function() {
    var pages = this.props.pages;
    var numberOfPages = pages.length;
    var firstPage = pages[0];
    var lastPage = pages[pages.length - 1];

    // if we only have one page, and it's fetching, then it's the initial
    // page load so let the user know we're loading the data
    if (numberOfPages === 1 && lastPage.state === PayloadStates.FETCHING) {
      return (
        <h1 className="loading-text">
          Loading...
        </h1>
      );
    }

    var tweetListItems = _.flatten(pages.map(function(tweets) {
      return tweets.data.map(this.renderTweet);
    }.bind(this)));

    return (
      <div className="feed">
        <h2 className="title">
          Feed
        </h2>
        <ul className="media-list tweets">
          {tweetListItems}
        </ul>
        <LoadMoreButton
          lastPage={lastPage}
          onLoadMore={this.props.onLoadMore}
          nextPageMetaField="nextPage" />
      </div>
    );
  }
})
)
);
