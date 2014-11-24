/** @jsx React.DOM */

var TimeZoneList = React.createClass({
  handleUpdate: function(timeZone) {
    this.props.onUpdate(timeZone);
    return;
  },
  handleTimeZoneRemove: function(timeZone) {
    // this.props.onTimeZoneRemove(timeZone);
    console.debug('REMOVE TIMEZONE');
    return;
  },

  render: function() {
    var updateHandler = this.handleUpdate;
    var removeHandler = this.handleTimeZoneRemove;
    time = new Date().getTime();

    var timeZoneNodes = this.props.data.map(function(timeZone, index) {
      return (
        <li className='timeZoneListItem' key={index}>
          <EditTimeZone id={timeZone.id} name={timeZone.name} city={timeZone.city} time={time} onUpdate={updateHandler}></EditTimeZone>
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