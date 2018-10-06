class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_email(
      params[:user][:email],
      params[:user][:password]
    )
    if @user
      login(@user)
      render :show
    else
      render json: ['Invalid Credentials'], status: 422
    end
  end

  def destroy
    # debugger
    if logout!
      render json: {sessions: {id: nil}}
    else
      render json: ['No user to logout'], status: 404
    end
  end

end
  