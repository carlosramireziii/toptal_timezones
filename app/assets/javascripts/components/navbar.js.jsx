/** @jsx React.DOM */

var Navbar = React.createClass({
  handleSearch: function(filter) {
    this.props.onSearch(filter);
    return;
  },

  render: function() {
    return (
      <nav className="navbar navbar-default" role="navigation">
        <div className="container-fluid">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <SearchForm onSearch={this.handleSearch}/>
            </li>
            <li>
              <Logout/>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
});