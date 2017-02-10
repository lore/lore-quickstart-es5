var React = require('react');

module.exports = React.createClass({
  displayName: 'Header',

  propTypes: {},

  render: function() {
    return (
      <nav className="navbar navbar-default navbar-static-top header">
        <div className="container">
          <div className="navbar-header">
            <div className="navbar-brand">
              Lore Quickstart
            </div>
          </div>
        </div>
      </nav>
    );
  }

});
