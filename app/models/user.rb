class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  enum pay_schedule: [:bi_monthly, :monthly, :weekly, :every_2_weeks]

  has_many :bills, dependent: :destroy
  has_many :payments, dependent: :destroy
  has_many :expenses, dependent: :destroy
end
