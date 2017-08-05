# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

10.times { Bill.create!(due_date: Date.tomorrow, interest_rate: 15, is_debt: true, total_amount: 578, name: "Capital One", category: "one_time", user_id: 1, min_amount_due: 58, promo_apr_exp_date: Date.tomorrow) }
