class RemoveMinAmountDueFromBill < ActiveRecord::Migration[5.1]
  def change
    remove_column :bills, :min_amount_due, :date
  end
end
