# frozen_string_literal: true

Rails.application.routes.draw do
  root 'root#index'
  get '/random_greeting', to: 'greeting#random_greeting'

  match '*path', to: 'root#index', via: :all # for react router to work
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
