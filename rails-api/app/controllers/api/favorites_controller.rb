class Api::FavoritesController < ApplicationController
    before_action :authenticate_user!

    def create
        giphy_id = params[:giphy_id]

        if Favorite.exists?(user_id: current_user.id, giphy_id: giphy_id)
            head(:unprocessable_entity)
        else
            favorite = current_user.favorites.build(giphy_id: giphy_id)
            favorite.save
            head(:ok)
        end
    end

    def index
        @favorites = current_user.favorites
        render json: @favorites, status: :ok
    end

    private

    def favorite_params
        params.require(:favorite).permit(:giphy_id)
    end


end
