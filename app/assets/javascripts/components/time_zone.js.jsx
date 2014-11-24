/** @jsx React.DOM */

var TimeZone = React.createClass({
  handleEdit: function() {
    this.props.onEdit();
    return;
  },
  handleRemove: function() {
    this.props.onRemove();
    return;
  },

  render: function() {
    var classes = React.addons.classSet({
      'timeZone': true,
      'hidden': !this.props.show
    });

    return (
      <div className={classes}>
        <Menu onEdit={this.handleEdit} onRemove={this.handleRemove}></Menu>
        <div>{this.props.zone}</div>
        <div>{this.props.city}</div>
        <div><Clock initialTime={this.props.time}></Clock></div>
      </div>
    );
  }
});