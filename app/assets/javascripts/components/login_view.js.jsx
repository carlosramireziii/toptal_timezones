/** @jsx React.DOM */

var LoginView = React.createClass({
  getInitialState: function() {
    return {error: null};
  },

  handleLogin: function(credentials) {
    $.ajax({
      url: '/auth/identity/callback',
      data: credentials,
      dataType: 'json',
      success: function(data) {
        if (!data['authenticated?']) {
          this.setState({message: data.error});
        }
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  render: function() {
    return (
      <div className='loginView'>
        <Message message={this.state.error} type='alert' />
        <div className='header'>
          <h1>Welcome to Toptal Timezones</h1>
          <h2>Sign in or register below to get started</h2>
        </div>
        <LoginForm onLogin={this.handleLogin} />
      </div>
    )
  }
});