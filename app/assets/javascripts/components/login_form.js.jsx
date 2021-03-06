/** @jsx React.DOM */

var { Link } = ReactRouter;

var LoginForm = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    
    var email = this.refs.email.getDOMNode().value.trim();
    var password = this.refs.password.getDOMNode().value.trim();

    this.props.onLogin({ auth_key: email, password: password });

    this.refs.email.getDOMNode().value = '';
    this.refs.password.getDOMNode().value = '';

    return;
  },

  render: function() {
    return (
      <div className='loginForm'>
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
          <div className='actions'>
            <div>
              <Link to='register'>{"I don't have an account"}</Link>
            </div>
            <input type="submit" value='Let me in' />
          </div>
        </form>
      </div>
    )
  }
});