class SessionsController < ApplicationController
  skip_before_filter :authorize, only: [:new, :create]
  # skip_before_filter :verify_authenticity_token, only: [:create]

  def new

  end

  def create
    user = User.find_by_email(params[:email])
    p user
    if user && user.authenticate(params[:password])
      sign_in(user)
      redirect_to user_path(user.id)
    else
      flash[:errors] = "Error!"
      render :new
    end
  end

  def destroy
    sign_out
    redirect_to new_session_path
  end
end
