var React = require('react');

module.exports = React.createClass({
  displayName: 'CreateButton',

  onClick: function() {
    console.log('Create tweet!');
  },

  render: function() {
    return (
      <button
        type="button"
        className="btn btn-primary btn-lg create-button"
        onClick={this.onClick}>
        +
      </button>
    );
  }

});
