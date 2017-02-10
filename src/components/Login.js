var React = require('react');
var Auth0Lock = require('auth0-lock').default;

module.exports = React.createClass({
  displayName: 'Login',

  componentDidMount: function() {
    this.lock = this.getLock();
    this.showLogin();
  },

  getLock: function(){
    var clientId = lore.config.auth0.clientId;
    var domain = lore.config.auth0.domain;

    return new Auth0Lock(clientId, domain, {
      auth: {
        redirect: false,
        sso: false
      },
      languageDictionary: {
        title: "Lore Quickstart"
      }
    });
  },

  onAuthentication: function(authResult) {
    // save user token to localStorage
  },

  showLogin: function(){
    this.lock.on('authenticated', this.onAuthentication);
    this.lock.show();
  },

  render: function() {
    return (
      <div/>
    );
  }

});
