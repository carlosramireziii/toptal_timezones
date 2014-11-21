/** @jsx React.DOM */

var TimeZone = React.createClass({
  handleClick: function() {
    var url = '/time_zones/' + this.props.id;
    window.location = url;
  },
  handleRemoveClick: function() {
    //this.props.onBoardRemove({id: this.props.id});
    console.debug('REMOVE CLICKED');
    return;
  },

  render: function() {
    return (
      <li className='timeZone'>
        <section>
          <span className='remove' onClick={this.handleRemoveClick}></span>
          <h2>{this.props.name}</h2>
          <div>{this.props.city}</div>
          <Clock initialTime={this.props.time}></Clock>
        </section>
      </li>
    );
  }
});