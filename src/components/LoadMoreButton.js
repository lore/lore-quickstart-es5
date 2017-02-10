var React = require('react');
var PayloadStates = require('../constants/PayloadStates');

module.exports = React.createClass({
  displayName: 'LoadMoreButton',

  propTypes: {
    lastPage: React.PropTypes.object.isRequired,
    onLoadMore: React.PropTypes.func.isRequired,
    nextPageMetaField: React.PropTypes.string.isRequired
  },

  render: function() {
    var lastPage = this.props.lastPage;
    var nextPageMetaField = this.props.nextPageMetaField;

    if(lastPage.state === PayloadStates.FETCHING) {
      return (
        <div className="footer">
          <button className="btn btn-default btn-lg disabled">
            Loading...
          </button>
        </div>
      );
    }

    if (!lastPage.meta[nextPageMetaField]) {
      return (
        <div className="footer"></div>
      );
    }

    return (
      <div className="footer">
        <button className="btn btn-default btn-lg" onClick={this.props.onLoadMore}>
          Load More
        </button>
      </div>
    );
  }

});
