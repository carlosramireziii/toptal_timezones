Rails.application.routes.draw do
  resources :time_zones, only: [:index, :create, :update, :destroy]
  root to: 'home#show'
end
