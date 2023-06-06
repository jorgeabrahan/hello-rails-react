class GreetingController < ApplicationController
  def random_greeting
    if Greeting.exists?
      greeting = Greeting.order("RANDOM()").first
      render json: { greeting: greeting }
    else
      render json: {}
    end
  end
end
