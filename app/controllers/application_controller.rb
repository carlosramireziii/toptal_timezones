class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  protected

  def restrict_access
    authenticate_or_request_with_http_token do |token, options|
      User.exists?(token: token)
    end
  end

  def current_user
    @current_user ||= User.find_by(token: params[:token])
  end
end
