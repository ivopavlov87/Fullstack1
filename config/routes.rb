Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :edit, :update]
    resources :comments, only: [:create, :show, :edit, :update, :destroy]
    resource :session, only: [:create, :destroy, :show]
    resources :posts, only: [:create, :show, :edit, :update, :destroy, :index] do
      resources :comments, only: [:index]
    end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "static_pages#root"
end
