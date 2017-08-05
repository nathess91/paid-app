class Api::V1::PaymentsController < Api::V1::BaseController
  def index
    @payments = Payment.all
    respond_with @payments
  end

  def create
    respond_with :api, :v1,
    @payment = Payment.create(payment_params)
  end

  def destroy
    respond_with Payment.destroy(params[:id])
  end

  def update
    user = Payment.find(params["id"])
    user.update_attributes(payment_params)
    respond_with payment, json: user
  end

  private
  def payment_params
     params.require(:payment).permit(:bill_id, :user_id, :date_paid, :amount_paid)
  end
end
