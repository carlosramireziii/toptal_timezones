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
        <TimeZone id={timeZone.id} key={index} name={timeZone.name} city={timeZone.city} time={time}>
        </TimeZone>
      );
    });
    return (
      <ul className="timeZoneList">
        {timeZoneNodes}
      </ul>
    );
  }
});