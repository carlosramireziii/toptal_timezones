/** @jsx React.DOM */

var RegisterView = React.createClass({
  // TODO: make this a prop?
  getInitialState: function() {
    return {error: null};
  },

  // TODO: receive this via props
  registerUrl: function() {
    return '/auth/identity/register';
  },

  handleRegister: function(identity) {
    $.ajax({
      url: this.registerUrl(),
      type: 'POST',
      data: identity,
      dataType: 'json',
      success: function(data) {
        console.debug(data);
        this.setState({ error: null });
      }.bind(this),
      error: function(xhr, status, err) {
        // TODO: provide better errors
        this.setState({ error: 'Something went wrong. Please try again.' })
        console.error(this.registerUrl(), status, err.toString());
      }.bind(this)
    });
  },

  render: function() {
    return (
      <div className='registerView'>
        <Message message={this.state.error} type='alert' />
        <div className='header'>
          <h1>Welcome to Toptal Timezones</h1>
          <h2>Sign in or register below to get started</h2>
        </div>
        <RegisterForm onRegister={this.handleRegister} />
      </div>
    )
  }
});