class Api::V1::UsersController < Api::V1::BaseController
  def index
    respond with current_user
  end

  # def create
  #   respond_with :api, :v1, User.create(create_user_params)
  # end
  #
  # def destroy
  #   respond_with User.destroy(params[:id])
  # end
  #
  # def update
  #   user = User.find(params["id"])
  #   user.update_attributes(update_user_params)
  #   respond_with user, json: user
  # end

  private
  # def create_user_params
  #    params.require(:user).permit(:id, :name, :total_debt, :house_id)
  # end
  # def update_user_params
  #    params.permit(:total_debt)
  # end
end
