class TimeZonesController < ApplicationController
  respond_to :json

  before_action :set_time_zone, only: [:update, :destroy]

  def index
    respond_with @time_zones = TimeZone.all
  end

  def create
    respond_with @time_zone = TimeZone.create(time_zone_params)
  end

  def update
    respond_with @time_zone.update(time_zone_params)
  end

  def destroy
    respond_with @time_zone.destroy
  end

  private

  def set_time_zone
    @time_zone = TimeZone.find(params[:id])
  end

  def time_zone_params
    params.require(:time_zone).permit(:name, :city)
  end
end
