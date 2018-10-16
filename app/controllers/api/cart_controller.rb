class Api::CartController < ApplicationController
    before_action :check_current_user

    def index
        @cartitems = current_user.cart
        render :index
    end

    def create
      @cartitem = Cartitem.create!(user_id: current_user.id, spectacle_id: params[:spectacleId].to_i )
    
      @spectacle_cart_item = current_user.cart.last
      render :show

    end
  
    def destroy
        @cartitem = current_user.cart.find(params[:item][:spectacleId])
        if @cartitem.destroy
            render json: @cartitem
        end
    end

    private

    def check_current_user
        render json: ["no user logged in"] if current_user.nil?
    end

end



# t.integer "user_id"
#     t.datetime "created_at", null: false
#     t.datetime "updated_at", null: false
#     t.integer "spectacle_id"