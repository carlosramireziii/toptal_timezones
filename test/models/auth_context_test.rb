require 'test_helper'

class AuthContextTest < ActiveSupport::TestCase

  test 'authenticated?' do
    context = AuthContext.new(false)
    refute context.authenticated?, 'Expected #authenticated? to be false'

    context = AuthContext.new(true)
    assert context.authenticated?, 'Expected #authenticated? to be true'
  end

end