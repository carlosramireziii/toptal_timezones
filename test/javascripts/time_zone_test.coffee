TU = React.addons.TestUtils

test 'renders component', (assert) -> 
  card = TU.renderIntoDocument new TimeZone()
  assert.ok TU.findRenderedComponentWithType(card, TimeZone), 'expected to render a TimeZone'

test 'displays timezone name', (assert) -> 
  name = 'Eastern Time'
  card = TU.renderIntoDocument new TimeZone(name: name)
  h2 = TU.findRenderedDOMComponentWithTag card, 'h2'
  assert.equal h2.props.children, name