class Space < ActiveRecord::Base
  belongs_to :event
  belongs_to :user
  has_many :items, through: :needs
  has_many :needs
end
