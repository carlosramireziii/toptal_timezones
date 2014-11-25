require 'test_helper'

class IdentitiesControllerTest < ActionController::TestCase
  
  test 'GET new when omniauth identity is set' do
    mock_omniauth_identity
    get :new, format: :json
    assert_equal @mock_identity, assigns(:identity)
    assert_response :success
  end

  test 'GET new when omniauth identity is not set' do
    get :new, format: :json
    assert_not_nil assigns(:identity)
    assert_response :success
  end

  protected

  def mock_omniauth_identity
    @mock_identity = Identity.new
    request.env['omniauth.identity'] = @mock_identity
  end
end
