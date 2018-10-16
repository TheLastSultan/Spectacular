class Api::CartController < ApplicationController
   
    def index
        @cartitems = current_user.cart
        render json: @cartitems
    end

    def create
      @cartitem = Cartitem.create(cart_params)

      if current_user.cart.map{|item| item.id}.include?(params[:cartitem][:spectacle_id])
        render json: ["already in cart"]
      end 
      
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
        @cartitem = Cartitem.where(spectacle_id: params[:cartitem][:spectacle_id]).find_by(user_id: params[:cartitem][:user_id])
        if @cartitem.destroy
            render json: @cartitem
        end
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