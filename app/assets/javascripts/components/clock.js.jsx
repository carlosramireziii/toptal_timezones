/** @jsx React.DOM */

var Clock = React.createClass({
  mixins: [SetIntervalMixin],

  getInitialState: function() {
    return { time: this.props.initialTime };
  },

  componentDidMount: function() {
    this.setInterval(this.tick, 1000);
  },
  componentWillReceiveProps: function(nextProps) {
    this.setState({ time: nextProps.initialTime });
  },

  tick: function() {
    time = new Date(this.state.time).getTime();
    this.setState({ time: time + 1000 });
  },

  formattedTime: function() {
    time = new Date(this.state.time);
    return time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds();
  },

  render: function() {
    return (
      <span>{this.formattedTime()}</span>
    );
  }
});