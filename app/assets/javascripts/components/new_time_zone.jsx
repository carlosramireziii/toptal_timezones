/** @jsx React.DOM */

var NewTimeZone = React.createClass({
  mixins: [FlipboardMixin],
  
  handleClose: function() {
    if (this.isBackShown()) {
      this.flip();
    }
    return;
  },
  handleClick: function() {
    if (this.isFrontShown()) {
      this.flip();
    }
    return;
  },
  handleCreate: function(timeZone) {
    this.handleClose();
    this.props.onCreate(timeZone);
    return;
  },

  render: function() {
    var classes = React.addons.classSet({
      'newTimeZone' : true,
      'splashMode': this.isFrontShown()
    });
    
    return (
      <div className={classes} onClick={this.handleClick}>
        <Splash show={this.isFrontShown()}>{this.props.children}</Splash>
        <TimeZoneForm 
          show={this.isBackShown()} 
          onClose={this.handleClose} 
          onTimeZoneSubmit={this.handleCreate} />
      </div>
    );
  }
});