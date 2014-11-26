$(document).ready(function() {

  var { Route, RouteHandler, DefaultRoute } = ReactRouter;

  var TimeZoneRoute = React.createClass({
    mixins: [RequireAuthMixin],
    url: '/time_zones',
    render: function() {
      return <TimeZoneView url={this.url}/>
    }
  });
  var RegisterRoute = React.createClass({
    url: '/auth/identity/register',
    render: function() {
      return <RegisterView url={this.url}/>
    }
  });

  var routes = (
    <Route handler={App}>
      <Route name="login" handler={LoginView}/>
      <Route name="register" handler={RegisterRoute}/>
      <Route name="time_zones" handler={TimeZoneRoute}/>
      <DefaultRoute handler={LoginView}/>
    </Route>
  );

  ReactRouter.run(routes, function (Handler) {
    React.render(<Handler/>, document.getElementById('main'));
  });

});