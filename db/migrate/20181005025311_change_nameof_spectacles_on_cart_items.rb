class ChangeNameofSpectaclesOnCartItems < ActiveRecord::Migration[5.2]
  def change
    add_column :cartitems, :spectacle_id, :integer
    remove_column :cartitems, :glass_id
  
    add_index :cartitems, :spectacle_id
    add_index :cartitems, :user_id
  end
end
