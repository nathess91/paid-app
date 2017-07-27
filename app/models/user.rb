class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  enum pay_schedule: [:bi_monthly, :monthly, :weekly, :every_2_weeks]

  has_many :bills, dependent: :destroy
  has_many :payments, dependent: :destroy
  has_many :expenses, dependent: :destroy

  def total_debt
    bill_total_amounts = User.find(self.id).bills.pluck(:total_amount)

    return bill_total_amounts.inject{ |sum, amt| sum + amt }.to_f
  end
end
