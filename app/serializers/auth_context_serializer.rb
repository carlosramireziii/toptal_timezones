class AuthContextSerializer < ActiveModel::Serializer
  attributes :authenticated?, :error, :token
end
