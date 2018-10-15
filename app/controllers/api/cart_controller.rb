class Api:CartController < ApplicationController
    def create
      @cartitem = current_user.cart.new(cart_params)
      render json: @cartitem
    end

    def index
      @cartitems = Cartitem.all.where(user_id: current_user.id)
      render json: @cartitems
    end

    def destroy
        @cartitem = current_user.cart.find(params[:id])
        @cartitem.destroy
        render json: @cartitem 
    end

    private

    def cart_params
        params.require(:cartitem).permit(:user_id, :spectacle_id)
    end

end



# t.integer "user_id"
#     t.datetime "created_at", null: false
#     t.datetime "updated_at", null: false
#     t.integer "spectacle_id"