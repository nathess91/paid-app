class BillsController < ApplicationController

  def index
    @user = current_user
    @bills = @user.bills
    @payments = Payment.all
    render component: 'Dashboard', props: { bills: @bills, user: @user, payments: @payments }
  end

  def new
    @bill = Bill.new
  end

  def create
    @bill = current_user.bills.create(bill_params)

    if @bill.valid?
      flash[:success] = 'New bill created successfully'
      redirect_to '/'
    else
      flash[:error] = @bill.errors.full_messages.join('. ')
    end
  end

  private

  def bill_params
    params.require(:bill).permit(:due_date, :interest_rate, :is_debt, :total_amount, :promo_apr_exp_date, :name, :category, :user_id, :min_amount_due)
  end

end
