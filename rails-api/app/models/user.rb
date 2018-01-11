class User < ActiveRecord::Base
  # Include default devise modules.
  devise :database_authenticatable,
         :registerable,
         :recoverable,
         :rememberable,
         :trackable,
         :validatable,
         #:confirmable,
         :omniauthable

  has_many :favorites

  include DeviseTokenAuth::Concerns::User
end
