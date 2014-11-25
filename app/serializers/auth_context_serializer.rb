class AuthContextSerializer < ActiveModel::Serializer
  attributes :authenticated?, :error
end
