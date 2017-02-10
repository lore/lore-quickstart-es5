var React = require('react');
var Tweet = require('./Tweet');
var PayloadStates = require('../constants/PayloadStates');
var Router = require('react-router');

module.exports = lore.connect(function(getState, props){
  return {
    tweets: getState('tweet.find', {
      pagination: {
        page: props.location.query.page || '1'
      }
    })
  }
})(
React.createClass({
  displayName: 'Feed',

  propTypes: {
    tweets: React.PropTypes.object.isRequired
  },

  renderTweet: function(tweet) {
    return (
      <Tweet key={tweet.id || tweet.cid} tweet={tweet} />
    );
  },

  renderPaginationLink: function(page, currentPage) {
    return (
      <li key={page} className={currentPage === String(page) ? 'active' : ''}>
        <Router.Link to={{ pathname: '/', query: { page: page } }}>
          {page}
        </Router.Link>
      </li>
    );
  },

  render: function() {
    var tweets = this.props.tweets;
    var currentPage = tweets.query.pagination.page;
    var paginationLinks = [];

    if (tweets.state === PayloadStates.FETCHING) {
      return (
        <h1 className="loading-text">
          Loading...
        </h1>
      )
    }

    // calculate the number of pagination links from our metadata, then
    // generate an array of pagination links
    var numberOfPages = Math.ceil(tweets.meta.totalCount / tweets.meta.perPage);
    for (var pageNumber = 1; pageNumber <= numberOfPages; pageNumber++) {
      paginationLinks.push(this.renderPaginationLink(pageNumber, currentPage));
    }

    return (
      <div className="feed">
        <h2 className="title">
          Feed
        </h2>
        <ul className="media-list tweets">
          {tweets.data.map(this.renderTweet)}
        </ul>
        <nav>
          <ul className="pagination">
            {paginationLinks}
          </ul>
        </nav>
      </div>
    );
  }
})
);
