class Item < ActiveRecord::Base
  belongs_to :space
  has_and_belongs_to_many :users
  has_many :spaces, through: :needs
end
