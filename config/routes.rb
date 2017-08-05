# Rails.application.routes.draw do
#
#   devise_scope :user do
#        get "signup", to: "devise/registrations#new"
#        get "login", to: "devise/sessions#new"
#        get "logout", to: "devise/sessions#destroy"
#
#     authenticated :user do
#       root 'bills#index', as: :authenticated_root
#     end
#
#     unauthenticated do
#       root 'devise/sessions#new', as: :unauthenticated_root
#     end
#   end
#
#   devise_for :users, controllers: {
#     sessions: 'users/sessions',
#     registrations: 'users/registrations'
#   }
#
#   resources :bills do
#     resources :payments
#   end
#
#   resources :expenses
#
# end
#
#
#
Rails.application.routes.draw do

root to: 'site#index'

namespace :api do
  namespace :v1 do
    resources :bills, only: [:index, :create, :destroy, :update]
   end
  end


namespace :api do
  namespace :v1 do
    resources :users, only: [:index, :create, :destroy, :update]
    end
  end

  namespace :api do
    namespace :v1 do
      resources :payments, only: [:index, :create, :destroy, :update]
      end
    end

  devise_for :user do
    root 'site#index'
    resources :user
  end

  # devise_for :users, controllers: {
  #   root 'site#index'
  #   sessions: 'users/sessions',
  #   registrations: 'users/registrations'
  # }
end
