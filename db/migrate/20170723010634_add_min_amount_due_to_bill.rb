class AddMinAmountDueToBill < ActiveRecord::Migration[5.1]
  def change
    add_column :bills, :min_amount_due, :decimal
  end
end
