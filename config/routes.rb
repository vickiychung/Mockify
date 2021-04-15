Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do

    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]

    resources :tracks, only: [:index, :show]
    resources :albums, only: [:index, :show]
    resources :artists, only: [:index, :show]

    resources :playlists, only: [:index, :show, :create, :update, :destroy] do
      post '/tracks/:track_id', to: 'tracks#create'
      delete '/tracks/:track_id', to: 'tracks#destroy'
    end
    
  end

  root to: 'static_pages#root'
end
