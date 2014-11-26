var RequireAuthMixin = {
  statics: {
    willTransitionTo: function (transition) {
      if (!auth.loggedIn()) {
        transition.redirect('/login');
      }
    }
  }
};