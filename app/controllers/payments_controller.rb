class PaymentsController < ApplicationController

  def create
    @payment = Payment.new(payment_params)
    respond_to do |format|
      format.json do
        if @payment.save
          render :json => @payment
        else
          render :json => { :errors => @payment.errors.messages }, :status => 422
        end
      end
    end
  end

  private

  def payment_params
    params.require(:payment).permit(:amount_paid, :date_paid, :bill_id)
  end

end
