/** @jsx React.DOM */

var { Route, RouteHandler, Link } = ReactRouter;

var App = React.createClass({
  getInitialState: function () {
    return {
      loggedIn: auth.loggedIn()
    };
  },

  setStateOnAuth: function (loggedIn) {
    this.setState({
      loggedIn: loggedIn
    });
  },

  componentWillMount: function () {
    auth.onChange = this.setStateOnAuth;
    auth.login();
  },

  render: function () {
    return (
      <div>
        <RouteHandler/>
      </div>
    );
  }
});