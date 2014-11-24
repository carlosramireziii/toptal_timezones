class TimeZoneSerializer < ActiveModel::Serializer
  attributes :id, :name, :city, :time
  
  def time
    object.current_time_in_zone.strftime("%c")
  end
end
