/** @jsx React.DOM */

var RegisterForm = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    
    var email = this.refs.email.getDOMNode().value.trim();
    var password = this.refs.password.getDOMNode().value.trim();
    var passwordConfirmation = this.refs.password.getDOMNode().value.trim();

    this.props.onRegister({ 
      email: email, 
      password: password, 
      password_confirmation: passwordConfirmation 
    });

    // TODO: what to do about these?
    // this.refs.email.getDOMNode().value = '';
    // this.refs.password.getDOMNode().value = '';
    // this.refs.passwordConfirmation.getDOMNode().value = '';

    return;
  },

  render: function() {
    return (
      <div className='registerForm'>
        <form onSubmit={this.handleSubmit}>
          <div className='field'>
            <label htmlFor='email'>Email</label>
            <div className='wrapper'>
              <input type='email' ref='email' />
            </div>
          </div>
          <div className='field'>
            <label htmlFor='password'>Password</label>
            <div className='wrapper'>
              <input type="password" ref="password" />
            </div>
          </div>
          <div className='field'>
            <label htmlFor='password_confirmation'>Confirm Password</label>
            <div className='wrapper'>
              <input type="password" ref="password_confirmation" />
            </div>
          </div>
          <div className='actions'>
            <div>
              <a href='#'>{"I already have an account"}</a>
            </div>
            <input type="submit" value='Sign me up' />
          </div>
        </form>
      </div>
    )
  }
});