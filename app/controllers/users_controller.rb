class UsersController < ApplicationController
  skip_before_filter :authorize, only: [:new, :create]

  def verify_user
    redirect_to user_path(current_user.id) unless params[:id] == current_user.id
  end

  def show
    @user = User.find(params[:id])
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in @user
      flash[:notice] = "Welcome to FoodForest!"
      redirect_to root_path
    else
      @errors = @user.errors.full_messages
      render :new
    end
  end

  private
    def user_params
      params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation)
    end
end