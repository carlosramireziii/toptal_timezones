class AuthContext
  include ActiveModel::SerializerSupport

  attr_reader :user, :error

  delegate :token, to: :user

  def initialize(is_authenticated, user = Guest.new, error = nil)
    @is_authenticated = is_authenticated
    @user = user
    @error = error
  end

  def authenticated?
    @is_authenticated
  end
end