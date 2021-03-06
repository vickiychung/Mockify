class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ['Invalid credentials. Try again!'], status: 401
    end
  end

  def destroy
    if current_user
      logout!
      render json: { message: 'Logout successful.' }
    else
      render json: ["You are not logged in...?"], status: 422
    end
  end
end