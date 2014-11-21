TU = React.addons.TestUtils

test 'sets initial time', (assert) ->
  date = new Date()
  clock = TU.renderIntoDocument new Clock(initialTime: date.getTime())
  assert.equal date.getTime(), clock.state.time

asyncTest 'updates time every minute', (assert) ->
  expect 1
  date = new Date()
  date.setHours(10, 30, 0);
  clock = TU.renderIntoDocument new Clock(initialTime: date.getTime())
  setTimeout ->
    QUnit.start()
    assert.ok clock.state.time > date
  , 1000

test 'renders component', (assert) -> 
  clock = TU.renderIntoDocument new Clock()
  assert.ok TU.findRenderedComponentWithType(clock, Clock), 'expected to render a Clock'

test 'renders formatted time', (assert) ->
  date = new Date()
  date.setHours(10, 30, 0);
  clock = TU.renderIntoDocument new Clock(initialTime: date.getTime())
  span = TU.findRenderedDOMComponentWithTag clock, 'span'
  assert.equal span.props.children, '10:30:0'