var React = require('react');

module.exports = React.createClass({
  displayName: 'Feed',

  propTypes: {},

  render: function () {
    return (
      <div className="feed">
        <h2 className="title">
          Feed
        </h2>
        <ul className="media-list tweets">
          {/* Tweets */}
        </ul>
      </div>
    );
  }
});
