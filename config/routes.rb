# frozen_string_literal: true

Rails.application.routes.draw do
  root 'root#index'
  get '/random_greeting', to: 'greeting#random_greeting'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
