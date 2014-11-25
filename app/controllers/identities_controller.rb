class IdentitiesController < ApplicationController
  respond_to :json

  def new
    @identity = request.env['omniauth.identity'] || Identity.new
    respond_with @identity, location: nil
  end
end
