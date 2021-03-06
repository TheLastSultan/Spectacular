class Api::SpectaclesController < ApplicationController

    def index
        @spectacles = Spectacle.all
    end

    def show
        @spectacle = Spectacle.find(params['spectacles']['id'])
    end

    def pick
        params['spectacle'].each do |k,v|
            @spectacles ? @spectacles += Spectacle.where({k => v}) : @spectacles = Spectacle.where({k => v})
        end
        render :index
    end

    private
    def user_params
        params.require(:spectacles).permit(:color ,:id , :description)
    end
    
    
end

 # @spectacles = nil
       

        # @spectacles = Spectacle.where( description: params['spectacles']['description'])
        # @spectacles = Spectacle.all if @spectacles.length == 0 