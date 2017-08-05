class AddAprToBill < ActiveRecord::Migration[5.1]
  def change
    add_column :bills, :apr, :decimal
  end
end
