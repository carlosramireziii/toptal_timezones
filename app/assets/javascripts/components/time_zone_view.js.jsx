/** @jsx React.DOM */

var TimeZoneView = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadTimeZonesFromServer();
  },

  loadTimeZonesFromServer: function() {
    foo = [
      { id: 1, zone: 'Eastern Time (US & Canada)', city: 'New York' },
      { id: 2, zone: 'Pacific Time (US & Canada)', city: 'San Francisco' }
    ];
    this.setState({data: foo});
    // $.ajax({
    //   url: this.props.url,
    //   dataType: 'json',
    //   success: function(data) {
    //     this.setState({data: data});
    //   }.bind(this),
    //   error: function(xhr, status, err) {
    //     console.error(this.props.url, status, err.toString());
    //   }.bind(this)
    // });
  },
  handleTimeZoneSubmit: function(timeZone) {
    var timeZones = this.state.data;
    timeZones.push(timeZone);
    // this.setState({data: timeZone}, function() {
    //   $.ajax({
    //     url: this.props.url,
    //     dataType: 'json',
    //     type: 'POST',
    //     data: {'time_zone': timeZone},
    //     success: function(data) {
    //       this.loadTimeZonesFromServer();
    //     }.bind(this),
    //     error: function(xhr, status, err) {
    //       console.error(this.props.url, status, err.toString());
    //     }.bind(this)
    //   });
    // });
  },
  handleTimeZoneRemove: function(timeZone) {
    var timeZones = this.state.data;

    // Seems like really bad code..
    for (i = 0; i <= timeZones.length; i++) {
      if (timeZones[i].id == timeZones.id) {
        timeZones.splice(i, 1);
        break;
      }
    }

    this.setState({data: timeZone}, function() {
      var url = this.props.url + '/' + timeZone.id;

      // $.ajax({
      //   url: url,
      //   dataType: 'json',
      //   type: 'DELETE',
      //   data: {'board': board},
      //   success: function(data) {
      //     this.loadTimeZonesFromServer();
      //   }.bind(this),
      //   error: function(xhr, status, err) {
      //     console.error(this.props.url, status, err.toString());
      //   }.bind(this)
      // });
    });
  },
  
  render: function() {
    return (
      <div className='timeZoneView'>
        <h1 className='page-header'>Your Timezones</h1>
        <TimeZoneList data={this.state.data} onTimeZoneRemove={this.handleTimeZoneRemove} />
        <NewTimeZone onTimeZoneSubmit={this.handleTimeZoneSubmit}>Create new time zone...</NewTimeZone>
      </div>
    );
  }
});