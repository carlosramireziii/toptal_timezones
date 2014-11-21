/** @jsx React.DOM */

var TimezoneCard = React.createClass({
  render: function() {
    return (
      <li className='timezoneCard'>
        <h2>{this.props.name}</h2>
        <div>{this.props.city}</div>
        <Clock initialTime={this.props.time}></Clock>
      </li>
    );
  }
});