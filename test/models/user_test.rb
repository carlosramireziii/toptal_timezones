require 'test_helper'

class UserTest < ActiveSupport::TestCase
  
  test 'token is set when creating new records' do
    [nil, ''].each do |input|
      user = User.new
      user.token = input
      user.save
      assert_not_nil user.token
    end
  end

  test 'token is not overwritten when creating new records if manually set' do
    user = User.new
    manually_input_token = SecureRandom.uuid
    user.token = manually_input_token
    user.save
    assert_equal manually_input_token, user.token
  end
  
end
