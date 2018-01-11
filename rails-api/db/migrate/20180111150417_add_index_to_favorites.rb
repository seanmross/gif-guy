class AddIndexToFavorites < ActiveRecord::Migration[5.1]
  def change
    add_index :favorites, :giphy_id, unique: true
  end
end
