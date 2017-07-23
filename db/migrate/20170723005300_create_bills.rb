class CreateBills < ActiveRecord::Migration[5.1]
  def change
    create_table :bills do |t|
      t.date :due_date
      t.date :min_amount_due
      t.decimal :interest_rate
      t.boolean :is_debt
      t.decimal :total_amount
      t.date :promo_apr_exp_date
      t.string :name
      t.integer :category
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
