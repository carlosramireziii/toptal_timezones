$(document).ready(function() {

  var { Route, RouteHandler, DefaultRoute } = ReactRouter;

  var routes = (
    <Route handler={App}>
      <Route name="login" handler={LoginView}/>
      <Route name="register" handler={RegisterView}/>
      <Route name="time_zones" handler={TimeZoneView}/>
      <DefaultRoute handler={LoginView}/>
    </Route>
  );

  ReactRouter.run(routes, function (Handler) {
    React.render(<Handler/>, document.getElementById('main'));
  });

});