require 'securerandom'

class Api::UsersController < ApplicationController

 
  def create
    if logged_in? 
      update_user
    else 
      @user = guest_user 
      login(@user)
      render :show
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end

  def guest_user
    random_key = "guest" + SecureRandom.hex(5)
    @user = User.create!(username: random_key, email: random_key, password: "password", guest_user: true )
    login(@user) 
  end

  def update_user
    @user = current_user
    @user.update(user_params)
    if @user.save
      @user.guest_user = false
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end 
  
end
  
