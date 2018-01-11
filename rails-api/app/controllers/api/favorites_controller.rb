class Api::FavoritesController < ApplicationController
    before_action :authenticate_user!

    def create
        giphy_id = params[:giphy_id]
        @favorite = current_user.favorites.build(giphy_id: giphy_id)
        
        if @favorite.save
            head(:ok)
        else
            head(:unprocessable_entity)
        end
    end

    private

    def favorite_params
        params.require(:favorite).permit(:giphy_id)
    end


end
