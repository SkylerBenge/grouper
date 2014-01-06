class Need < ActiveRecord::Base
  belongs_to :space
  belongs_to :items
end
