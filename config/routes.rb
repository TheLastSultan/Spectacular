Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
      resources :spectacles, only: [:index, :show]
      get 'pick', action: :pick, controller: 'spectacles'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
