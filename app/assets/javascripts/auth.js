var auth = {

  url: '/auth/identity/callback',

  login: function (credentials, cb) {
    var cb = arguments[arguments.length - 1];
    if (localStorage.token) {
      cb && cb(true);
      this.onChange(true);
      return;
    }

    $.ajax({
      url: this.url,
      data: credentials,
      dataType: 'json',
      success: function(data) {
        if (data.authenticated) {
          localStorage.token = data.token;
          cb && cb(true);
          this.onChange(true)
        }
        else {
          cb && cb(false);
          this.onChange(false);
        }
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.url, status, err.toString());
      }.bind(this)
    });

  },

  getToken: function () {
    return localStorage.token;
  },

  logout: function (cb) {
    delete localStorage.token;
    cb && cb();
    this.onChange(false);
  },

  loggedIn: function () {
    return !!localStorage.token;
  },

  onChange: function () {}
};