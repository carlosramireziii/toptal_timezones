require 'test_helper'

class TimeZoneTest < ActiveSupport::TestCase
  
  setup do
    @time_zone = time_zones(:default)
  end

  test 'requires presence of name' do
    @time_zone.name = nil
    assert_invalid :name, @time_zone
  end

  test 'requires presence of city' do
    @time_zone.city = nil
    assert_invalid :city, @time_zone
  end

  test '#current_time_in_zone' do
    travel_to Time.parse('2014-11-23 10:00:00') do
      assert_equal '10:00:00', @time_zone.current_time_in_zone.strftime("%T")

      @time_zone.name = 'Pacific Time (US & Canada)'
      assert_equal '07:00:00', @time_zone.current_time_in_zone.strftime("%T")
    end

    @time_zone.name = nil
    assert_nil @time_zone.current_time_in_zone
  end
end
