class EventsController < ApplicationController
  def new
  end

  def show
    @name = Event.find(params[:id]).name
  end

  def create
  end

  def destroy
  end
end
