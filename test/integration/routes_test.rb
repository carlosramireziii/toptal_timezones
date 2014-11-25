require 'test_helper'

class RoutesTest < ActionDispatch::IntegrationTest

  test 'authentication routes' do
    provider = 'identity'
    assert_routing "auth/#{provider}/callback", { controller: 'sessions', action: 'create', provider: provider }
    assert_routing "auth/failure", { controller: 'sessions', action: 'failure' }
  end

  test 'identities resource routes' do
    assert_routing({ method: :get, path: 'identities/new' }, { controller: 'identities', action: 'new' })
  end

  test 'sessions resource routes' do
    assert_routing({ method: :post, path: 'sessions' }, { controller: 'sessions', action: 'create' })
    assert_routing({ method: :delete, path: 'sessions' }, { controller: 'sessions', action: 'destroy' })
  end

  test 'time_zones resource routes' do
    id = time_zones(:default).to_param
    assert_routing({ method: :get, path: 'time_zones' }, { controller: 'time_zones', action: 'index' })
    assert_routing({ method: :post, path: "time_zones" }, { controller: 'time_zones', action: 'create' })
    assert_routing({ method: :patch, path: "time_zones/#{id}" }, { controller: 'time_zones', action: 'update', id: id })
    assert_routing({ method: :delete, path: "time_zones/#{id}" }, { controller: 'time_zones', action: 'destroy', id: id })
  end

end
