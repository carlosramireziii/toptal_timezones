/** @jsx React.DOM */

var TimeZoneSelect = React.createClass({
  render: function () {
    var options = this.props.data.map(function(zone, index) {
      return <option>{zone.name}</option>
    });
    return (
      <select ref="zone">{options}</select>
    );
  }
});