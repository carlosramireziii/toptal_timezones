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

    if (isNaN(time.getTime())) {
      return '';
    }
    
    return (
      $.strPad(time.getHours(), 2, '0') + ':' + 
      $.strPad(time.getMinutes(), 2, 0) + ':' + 
      $.strPad(time.getSeconds(), 2, 0)
    );
  },

  render: function() {
    return (
      <span>{this.formattedTime()}</span>
    );
  }
});