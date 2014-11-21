/** @jsx React.DOM */

var Menu = React.createClass({
  render: function() {
    return (
      <ul className='menu'>
        <li><span className='edit' onClick={this.handleEditClick}></span></li>
        <li><span className='remove' onClick={this.handleRemoveClick}></span></li>
      </ul>
    );
  }
});