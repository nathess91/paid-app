class Api::V1::BillsController < Api::V1::BaseController
  def index
    respond_with Bill.all
  end

  def create
    respond_with :api, :v1, Bill.create(bill_params)
  end

  def destroy
    respond_with Bill.destroy(params[:id])
  end

  def update
    item = Bill.find(params["id"])
    item.update_attributes(bill_params)
    respond_with bill, json: bill
  end

  private
  def bill_params
     params.require(:bill).permit(:due_date, :interest_rate, :is_debt, :total_amount, :promo_apr_exp_date, :min_amount_due, :name, :category, :user_id)
  end
end
