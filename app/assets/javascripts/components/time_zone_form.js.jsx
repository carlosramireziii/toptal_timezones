/** @jsx React.DOM */

var TimeZoneForm = React.createClass({
  // handleSubmit: function(e) {
  //   e.preventDefault();
  //   var title = this.refs.title.getDOMNode().value.trim();
  //   if (!title) {
  //     return;
  //   }
  //   this.props.onBoardSubmit({title: title});
  //   this.refs.title.getDOMNode().value = '';
  //   return;
  // },
  handleClick: function() {
    this.props.onClose();
    return;
  },
  
  render: function() {
    var classes = React.addons.classSet({
      'timeZoneForm': true,
      'hidden': !this.props.show
    });

    return (
      <div className={classes}>
        <div className='header'>
          <button type="button" className="close" onClick={this.handleClick}>
            <span aria-hidden="true">&times;</span>
            <span className="sr-only">Close</span>
          </button>
          <h5>Add Timezone</h5>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className='field'>
            <label htmlFor='zone'>Title</label>
            <TimeZoneSelect data={ZONES}></TimeZoneSelect>
          </div>
          <div className='field'>
            <label htmlFor='city'>City</label>
            <input type="text" placeholder="City" ref="city" />
          </div>
          <input type="submit" value="Add Timezone" />
        </form>
      </div>
    );
  }
});