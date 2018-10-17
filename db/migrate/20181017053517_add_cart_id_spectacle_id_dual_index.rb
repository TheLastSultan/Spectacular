class AddCartIdSpectacleIdDualIndex < ActiveRecord::Migration[5.2]
  def change
    add_index :cartitems, [:user_id, :spectacle_id]
  end
end
