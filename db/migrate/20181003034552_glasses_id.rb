class GlassesId < ActiveRecord::Migration[5.2]
  def change
    remove_column :cartitems, :glasses_id
  end
end
