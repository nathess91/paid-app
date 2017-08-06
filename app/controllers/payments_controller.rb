class PaymentsController < ApplicationController

  def create
    @payment = Payment.new(payment_params)
    render component: 'NewPayment', props: { payments: @payments, payment: @payment, user_id: @payment.user_id, bill_id: @payment.bill_id }
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
