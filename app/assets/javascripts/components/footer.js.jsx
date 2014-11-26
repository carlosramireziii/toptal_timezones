/** @jsx React.DOM */

var Footer = React.createClass({
  render: function() {
    return (
      <footer>
        <nav className="navbar navbar-default footer-nav">
          <div className='container-fluid'>
            <p className="text-muted credit text-center">Carlos Ramirez III, &copy; 2014</p>
          </div>
        </nav>
      </footer>
    );
  }
});