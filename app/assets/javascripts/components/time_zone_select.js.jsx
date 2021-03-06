/** @jsx React.DOM */

var TimeZoneSelect = React.createClass({
  render: function () {
    var options = this.props.data.map(function(zone, index) {
      return <option key={index} value={zone.name}>{zone.name}</option>
    });
    return (
      <select ref="zone" defaultValue={this.props.defaultValue}>{options}</select>
    );
  }
});