class BillsController < ApplicationController

  def index
    @bills = Bill.all
    @user = current_user
    render component: 'Dashboard', props: { bills: @bills, user: @user }
  end

end
