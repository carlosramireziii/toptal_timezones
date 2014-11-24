/** @jsx React.DOM */

var EditTimeZone = React.createClass({
  mixins: [FlipboardMixin],

  handleEdit: function() {
    console.debug('EDIT_TIME_ZONE#EDIT_CLICKED!');
    if (this.isFrontShown()) {
      this.flip();
    }
    return;
  },
  handleRemove: function() {
    console.debug('EDIT_TIME_ZONE#REMOVE_CLICKED!');
    // this.props.onRemove();
    //this.props.onTimeZoneRemove({id: this.props.id});
    return;
  },
  
  handleClose: function() {
    if (this.isBackShown()) {
      this.flip();
    }
    return;
  },
  handleTimeZoneSubmit: function(timeZone) {
    this.handleClose();
    // this.props.onTimeZoneSubmit(timeZone);
    console.debug('TIMEZONE SUBMIT EDIT');
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
        <TimeZoneForm {...this.props} show={this.isBackShown()} onClose={this.handleClose} onTimeZoneSubmit={this.handleTimeZoneSubmit}></TimeZoneForm>
      </div>
    );
  }
});