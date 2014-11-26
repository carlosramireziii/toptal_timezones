/** @jsx React.DOM */

var LoginView = React.createClass({
  mixins: [ReactRouter.Navigation],

  // TODO: make this a prop?
  getInitialState: function() {
    return {error: false};
  },

  handleLogin: function(credentials) {
    auth.login(credentials, function(loggedIn) {
      console.debug('Status: ' + loggedIn);
      if (!loggedIn) {
        return this.setState({ error: true });
      }
      else {
        this.transitionTo('/time_zones');
      }
    }.bind(this));
  },

  render: function() {
    var errors = this.state.error ? 'Bad login information' : null;

    return (
      <div className='loginView'>
        <Message message={errors} type='alert' />
        <div className='header'>
          <h1>Welcome to Toptal Timezones</h1>
          <h2>Sign in or register below to get started</h2>
        </div>
        <LoginForm onLogin={this.handleLogin} />
      </div>
    )
  }
});