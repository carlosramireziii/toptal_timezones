/** @jsx React.DOM */

var Logout = React.createClass({

  mixins: [ReactRouter.Navigation],

  handleClick: function() {
    auth.logout(function() {
      this.transitionTo('/login');
    }.bind(this));
  },

  render: function() {
    return (
      <a className='logout' onClick={this.handleClick}>Logout</a>
    );
  }

});