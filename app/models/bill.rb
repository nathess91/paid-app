class Bill < ApplicationRecord
  belongs_to :user

  enum category: [:one_time, :recurring]
end
