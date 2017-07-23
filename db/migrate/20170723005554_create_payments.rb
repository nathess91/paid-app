class CreatePayments < ActiveRecord::Migration[5.1]
  def change
    create_table :payments do |t|
      t.decimal :amount_paid
      t.date :date_paid
      t.references :user, foreign_key: true
      t.references :bill, foreign_key: true

      t.timestamps
    end
  end
end
