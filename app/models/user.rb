class User < ActiveRecord::Base
  include TokenGenerator

  before_validation lambda { |o| o.generate_token(:token) unless o.token.present? }, on: :create

  def self.from_omniauth(auth)
    find_by(provider: auth['provider'], uid: auth['uid']) || create_with_omniauth(auth)
  end

  def self.create_with_omniauth(auth)
    create! do |user|
      user.provider = auth['provider']
      user.uid = auth['uid']
    end
  end
end
