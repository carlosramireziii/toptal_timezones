TU = React.addons.TestUtils

test 'renders component', (assert) -> 
  card = TU.renderIntoDocument new TimezoneCard()
  assert.ok TU.findRenderedComponentWithType(card, TimezoneCard), 'expected to render a TimezoneCard'

test 'displays timezone name', (assert) -> 
  name = 'Eastern Time'
  card = TU.renderIntoDocument new TimezoneCard(name: name)
  h2 = TU.findRenderedDOMComponentWithTag card, 'h2'
  assert.equal h2.props.children, name