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
        @spectacle = current_user.cart.find(params[:item][:spectacleId]) || Cartitem.find_by(spectacle_id: params[:item][:spectacleId])
        @cartitem = Cartitem.find_by(spectacle_id: @spectacle.id, user_id: current_user.id)
        if @cartitem.destroy
            render json: @spectacle
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