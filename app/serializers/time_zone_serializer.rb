class TimeZoneSerializer < ActiveModel::Serializer
  attributes :id, :name, :city, :time, :offset
  
  def time
    object.current_time_in_zone.strftime("%c")
  end

  def offset
    object.current_time_in_zone.formatted_offset
  end
end
