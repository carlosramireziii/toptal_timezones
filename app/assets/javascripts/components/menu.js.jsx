/** @jsx React.DOM */

var Menu = React.createClass({
  handleEdit: function() {
    this.props.onEdit();
    return;
  },
  handleRemove: function() {
    this.props.onRemove();
    return;
  },

  render: function() {
    return (
      <ul className='menu'>
        <li><span className='edit' onClick={this.handleEdit}></span></li>
        <li><span className='remove' onClick={this.handleRemove}></span></li>
      </ul>
    );
  }
});