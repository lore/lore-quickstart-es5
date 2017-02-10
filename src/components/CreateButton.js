var React = require('react');

module.exports = React.createClass({
  displayName: 'CreateButton',

  onClick: function() {
    lore.dialog.show(function() {
      return (
        <h1>Dialog Placeholder</h1>
      );
    });
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
