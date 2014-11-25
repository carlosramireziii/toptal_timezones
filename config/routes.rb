Rails.application.routes.draw do
  resources :identities, only: [:new]
  resource :sessions, only: [:create, :destroy]
  match 'auth/:provider/callback' => 'sessions#create', via: :all
  match 'auth/failure' => 'sessions#failure', via: :all
  resources :time_zones, only: [:index, :create, :update, :destroy]
  root to: 'home#show'
end
