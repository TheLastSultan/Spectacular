class Api::SpectaclesController < ApplicationController

    def index
        @spectacles = Spectacle.all
    end

    def show
        @spectacle = Spectacle.find(params[:id])
    end

    def pick
        render :index
    end

    private
    def pokemon_params
        params.require(:spectacles).permit(:color, :shape, 
            :material, :sex, :title, :description, :staffpick)
    end


end