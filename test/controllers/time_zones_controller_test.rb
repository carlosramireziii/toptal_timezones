require 'test_helper'

class TimeZonesControllerTest < ActionController::TestCase
  
  setup do
    @time_zone = time_zones(:default)
    login_user_for_tests @time_zone.user
  end

  test 'GET index' do
    get :index, format: :json
    assert_not_nil assigns(:time_zones)
    assert_response :success
  end

  test 'GET index with filter' do
    get :index, format: :json, name: 'foo'
    assert_not_nil assigns(:time_zones)
    assert_empty assigns(:time_zones)

    get :index, format: :json, name: @time_zone.name
    assert_not_nil assigns(:time_zones)
    assert_not_empty assigns(:time_zones)
    assert_includes assigns(:time_zones), @time_zone
  end

  test 'POST create' do
    assert_difference 'TimeZone.count' do
      post :create, format: :json, time_zone: attrs
    end
    assert_not_nil assigns(:time_zone)
    assert_response :success
  end

  test 'POST create when unsuccessful' do
    TimeZone.stub_any_instance :save, false do
      assert_no_difference 'TimeZone.count' do
        post :create, format: :json, time_zone: attrs
      end
      assert_not_nil assigns(:time_zone)
      assert_response :success
    end
  end

  test 'GET show' do
    get :show, format: :json, id: @time_zone
    assert_equal assigns(:time_zone), @time_zone
    assert_response :success
  end

  test 'PATCH update' do
    patch :update, format: :json, id: @time_zone, time_zone: attrs
    assert_equal @time_zone, assigns(:time_zone)
    assert_response :success
  end

  test 'DELETE destroy' do
    assert_difference 'TimeZone.count', -1 do
      delete :destroy, format: :json, id: @time_zone
    end
    assert_equal @time_zone, assigns(:time_zone)
    assert_response :success
  end

  private

  def attrs
    time_zones(:default).dup.attributes.except('id')
  end
end
