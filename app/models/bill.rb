class Bill < ApplicationRecord
  belongs_to :user

  enum category: [:one_time, :recurring]

  has_many :payments, dependent: :destroy

  validates :due_date, :is_debt, :total_amount, :name, :category, presence: true

  after_save :set_defaults, unless: :persisted?

  def set_defaults
   self.apr  ||= 0
  end

end
