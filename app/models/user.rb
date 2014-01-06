class User < ActiveRecord::Base
  has_secure_password

  before_save :create_remember_token

  validates :email, uniqueness: true, presence: true
  validates :name, presence: true
  validates :password, presence: true, length: { minimum: 6 }
  validates :password_confirmation, presence: true

  has_and_belongs_to_many :events
  has_and_belongs_to_many :items
  has_many :spaces
  def create_remember_token
    self.remember_token = SecureRandom.urlsafe_base64
  end
end

