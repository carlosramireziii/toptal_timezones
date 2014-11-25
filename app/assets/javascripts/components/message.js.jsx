/** @jsx React.DOM */

var Message = React.createClass({
  render: function() {
    var classes = React.addons.classSet({
      'message': true,
      'hidden': this.props.message == null,
      'alert': this.props.type == 'alert',
      'notice': this.props.type == 'notice',
      'info': this.props.type == 'info'
    });

    return (
      <p className={classes}>{this.props.message}</p>
    )
  }
});