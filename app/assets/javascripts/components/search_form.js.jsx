/** @jsx React.DOM */

var SearchForm = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    
    var filter = this.refs.filter.getDOMNode().value.trim();

    this.props.onSearch(filter);

    this.refs.filter.getDOMNode().value = '';

    return;
  },

  render: function() {
    return (
      <form className='searchForm' role="search" onSubmit={this.handleSubmit}>
        <div className="field">
          <input type="text" placeholder="Search by name..." ref='filter'/>
        </div>
        <button type="submit">Filter</button>
      </form>
    )
  }
});