class TimeZone < ActiveRecord::Base
  belongs_to :user, inverse_of: :time_zones

  validates :name, presence: true
  validates :city, presence: true

  def current_time_in_zone
    return unless name.present?

    Time.use_zone(name) do
      Time.zone.now
    end
  end
end
