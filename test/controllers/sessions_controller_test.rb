require 'test_helper'

class SessionsControllerTest < ActionController::TestCase

  test 'POST create' do
    mock_omniauth_auth
    post :create, format: :json, provider: @provider
    assert_not_nil assigns(:auth_context)
    assert_equal assigns(:auth_context).user.id, session[:user_id]
    assert_response :success
  end

  test 'POST create when user exists' do
    user = users(:default)
    mock_omniauth_auth_from_user(user)

    assert_no_difference 'User.count' do
      post :create, format: :json, provider: @provider
    end
  end

  test 'POST create when user does not exist' do
    mock_omniauth_auth

    assert_difference 'User.count' do
      post :create, format: :json, provider: @provider
    end
  end

  test 'DELETE destroy' do
    login_user_for_tests(users(:default))

    delete :destroy, format: :json
    assert_not_nil assigns(:auth_context)
    assert_nil session[:user_id]
    assert_response :success
  end

  test 'ANY failure' do
    get :failure, format: :json
    assert_not_nil assigns(:auth_context)
    assert_response :success
  end

  protected

  def mock_omniauth_auth
    @provider = :identity
    request.env['omniauth.auth'] = OmniAuth::AuthHash.new({
      provider: @provider,
      uid: SecureRandom.uuid
    })
  end

  def mock_omniauth_auth_from_user(user)
    @provider = user.provider
    OmniAuth.config.mock_auth[@provider] = OmniAuth::AuthHash.new({
      provider: @provider,
      uid: user.uid
    })
    request.env['omniauth.auth'] = OmniAuth.config.mock_auth[@provider]
  end
end