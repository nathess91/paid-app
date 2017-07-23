class BillsController < ApplicationController

  def index
    @bills = Bill.all
    render component: 'Bills', props: { bills: @bills }
  end

end
