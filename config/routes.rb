Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
      
    resources :users, only: [:create , :update]
    resource :session, only: [:create, :destroy ]  

    resource :cart, only: [:create, :destroy, :index], controller: 'cart'  
    resources :spectacles, only: [:index, :show]
    resource :harambe, only: [:index]
    post 'pick', action: :pick, controller: 'spectacles'
  
  end

end
