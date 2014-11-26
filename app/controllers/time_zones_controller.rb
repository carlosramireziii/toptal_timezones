class TimeZonesController < ApplicationController
  respond_to :json

  before_action :restrict_access
  before_action :set_time_zone, only: [:show, :update, :destroy]

  def index
    respond_with @time_zones = current_user.time_zones.filter(params)
  end

  def create
    respond_with @time_zone = current_user.time_zones.create(time_zone_params)
  end

  def show
    respond_with @time_zone
  end

  def update
    respond_with @time_zone.update(time_zone_params)
  end

  def destroy
    respond_with @time_zone.destroy
  end

  private

  def set_time_zone
    @time_zone = current_user.time_zones.find(params[:id])
  end

  def time_zone_params
    params.require(:time_zone).permit(:name, :city)
  end
end
