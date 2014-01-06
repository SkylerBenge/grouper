class Event < ActiveRecord::Base
  has_and_belongs_to_many :users
  has_many :spaces
  has_many :items, through: :users
end
