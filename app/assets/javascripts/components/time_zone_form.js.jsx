/** @jsx React.DOM */

var TimeZoneForm = React.createClass({
  handleClose: function() {
    this.props.onClose();
    return;
  },
  handleSubmit: function(e) {
    e.preventDefault();
    
    var city = this.refs.city.getDOMNode().value.trim();
    if (!city) {
      return;
    }
    var name = this.refs.name.getDOMNode().value.trim();
    if (!name) {
      return;
    }

    this.props.onTimeZoneSubmit({ id: this.props.id, name: name, city: city });

    if (!this.isForExistingData()) {
      this.refs.name.getDOMNode().value = ZONES[0].name;
      this.refs.city.getDOMNode().value = '';
    }
    return;
  },

  isForExistingData: function() {
    return this.props.id != null;
  },

  headerContent: function() {
    var action = (this.isForExistingData()) ? 'Edit' : 'Add';
    return action + ' ' + 'Time Zone';
  },
  submitContent: function() {
    var action = (this.isForExistingData()) ? 'Update' : 'Create';
    return action + ' ' + 'Time Zone';
  },
  
  render: function() {
    var classes = React.addons.classSet({
      'timeZoneForm': true,
      'hidden': !this.props.show
    });

    return (
      <div className={classes}>
        <div className='header'>
          <button type="button" className="close" onClick={this.handleClose}>
            <span aria-hidden="true">&times;</span>
            <span className="sr-only">Close</span>
          </button>
          <h5>{this.headerContent()}</h5>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className='field'>
            <label htmlFor='name'>Title</label>
            <TimeZoneSelect data={ZONES} defaultValue={this.props.name} ref='name'></TimeZoneSelect>
          </div>
          <div className='field'>
            <label htmlFor='city'>City</label>
            <input type="text" placeholder="City" ref="city" defaultValue={this.props.city} />
          </div>
          <input type="submit" value={this.submitContent()} />
        </form>
      </div>
    );
  }
});