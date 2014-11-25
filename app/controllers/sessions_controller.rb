class SessionsController < ApplicationController
  respond_to :json

  def create
    user = User.from_omniauth(auth_hash)
    @auth_context = AuthContext.new(true, user)
    session[:user_id] = user.id
    respond_with @auth_context, location: nil
  end

  def destroy
    session[:user_id] = nil
    respond_with @auth_context = AuthContext.new(false)
  end

  def failure
    respond_with @auth_context = AuthContext.new(false, Guest.new, 'Could not login. Are you sure your credentials were correct?')
  end

  protected

  def auth_hash
    request.env['omniauth.auth']
  end

end
