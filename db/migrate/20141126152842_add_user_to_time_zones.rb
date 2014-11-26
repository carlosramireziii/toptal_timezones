class AddUserToTimeZones < ActiveRecord::Migration
  def change
    add_reference :time_zones, :user, index: true
  end
end
