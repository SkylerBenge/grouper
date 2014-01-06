class ItemsController < ApplicationController
  def show
    @items = item.all
  end

  def create
  end
end
