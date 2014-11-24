/** @jsx React.DOM */

var TimeZoneList = React.createClass({
  handleTimeZoneRemove: function(timeZone) {
    // this.props.onTimeZoneRemove(timeZone);
    console.debug('REMOVE TIMEZONE');
    return;
  },

  render: function() {
    var handler = this.handleTimeZoneRemove;
    time = new Date().getTime();
    var timeZoneNodes = this.props.data.map(function(timeZone, index) {
      return (
        <li className='timeZoneListItem' key={index}>
          <EditTimeZone id={timeZone.id} zone={timeZone.zone} city={timeZone.city} time={time}></EditTimeZone>
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