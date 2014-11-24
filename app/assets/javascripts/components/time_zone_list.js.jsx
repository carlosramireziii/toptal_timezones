/** @jsx React.DOM */

var TimeZoneList = React.createClass({
  handleUpdate: function(timeZone) {
    this.props.onUpdate(timeZone);
    return;
  },
  handleRemove: function(timeZone) {
    this.props.onRemove(timeZone);
    return;
  },

  render: function() {
    var updateHandler = this.handleUpdate;
    var removeHandler = this.handleRemove;

    var timeZoneNodes = this.props.data.map(function(timeZone, index) {
      return (
        <li className='timeZoneListItem' key={index}>
          <EditTimeZone 
            id={timeZone.id} 
            name={timeZone.name} 
            city={timeZone.city} 
            time={timeZone.time} 
            onUpdate={updateHandler} 
            onRemove={removeHandler} />
        </li>
      );
    });
    return (
      <ul className="timeZoneList">
        {timeZoneNodes}
      </ul>
    );
  }
});