/** @jsx React.DOM */

var EditTimeZone = React.createClass({
  mixins: [FlipboardMixin],

  handleEdit: function() {
    if (this.isFrontShown()) {
      this.flip();
    }
    return;
  },
  handleUpdate: function(timeZone) {
    this.handleClose();
    this.props.onUpdate(timeZone);
    return;
  },
  handleRemove: function() {
    this.props.onRemove({id: this.props.id});
    return;
  },
  
  handleClose: function() {
    if (this.isBackShown()) {
      this.flip();
    }
    return;
  },

  render: function() {
    var classes = React.addons.classSet({
      'editTimeZone' : true,
      'splashMode': this.isFrontShown()
    });
    
    return (
      <div className={classes} onClick={this.handleClick}>
        <TimeZone {...this.props} show={this.isFrontShown()} onEdit={this.handleEdit} onRemove={this.handleRemove}></TimeZone>
        <TimeZoneForm {...this.props} show={this.isBackShown()} onClose={this.handleClose} onTimeZoneSubmit={this.handleUpdate}></TimeZoneForm>
      </div>
    );
  }
});