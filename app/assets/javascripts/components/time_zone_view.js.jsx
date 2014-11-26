/** @jsx React.DOM */

var TimeZoneView = React.createClass({

  mixins: [RequireAuthMixin],

  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadTimeZonesFromServer();
  },

  loadTimeZonesFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  handleTimeZoneCreate: function(timeZone) {
    var timeZones = this.state.data;
    timeZones.push(timeZone);

    this.setState({data: timeZones}, function() {
      $.ajax({
        url: this.props.url,
        dataType: 'json',
        type: 'POST',
        data: {'time_zone': timeZone},
        success: function(data) {
          this.loadTimeZonesFromServer();
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
    });
  },
  handleTimeZoneUpdate: function(timeZone) {
    var timeZones = this.state.data;

    for (i = 0; i < timeZones.length; i++) {
      if (timeZones[i].id == timeZone.id) {
        timeZones[i] = timeZone;
        break;
      }
    }

    this.setState({data: timeZones}, function() {
      var url = this.props.url + '/' + timeZone.id;

      $.ajax({
        url: url,
        dataType: 'json',
        type: 'PATCH',
        data: {'time_zone': timeZone},
        success: function(data) {
          this.loadTimeZonesFromServer();
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
    });
  },
  handleTimeZoneRemove: function(timeZone) {
    var timeZones = this.state.data;

    for (i = 0; i < timeZones.length; i++) {
      if (timeZones[i].id == timeZones.id) {
        timeZones.splice(i, 1);
        break;
      }
    }

    this.setState({data: timeZones}, function() {
      var url = this.props.url + '/' + timeZone.id;

      $.ajax({
        url: url,
        dataType: 'json',
        type: 'DELETE',
        success: function(data) {
          this.loadTimeZonesFromServer();
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
    });
  },
  
  render: function() {
    return (
      <div className='timeZoneView'>
        <Navbar/>
        <section>
          <h1 className='page-header'>Your Timezones</h1>
          <TimeZoneList
            data={this.state.data} 
            onUpdate={this.handleTimeZoneUpdate} 
            onRemove={this.handleTimeZoneRemove} />
          <NewTimeZone onCreate={this.handleTimeZoneCreate}>Create new time zone...</NewTimeZone>
        </section>
      </div>
    );
  }
});