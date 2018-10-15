class Api::CartController < ApplicationController
   
    def index
        @cartitems = current_user.cart
        render "api/spectacles/index"
    end

    def create
      @cartitem = Cartitem.create(cart_params)
      if @cartitem.save
        render json: @cartitem
      else
        render json: ["already in cart"]
      end 

    end
    # Cartitem.all.where(user_id: current_user.id)
    #   render "api/spectacles/show"
    #   spectacle_item = Spectacle.find(params[:spectacle_id]).attributes


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