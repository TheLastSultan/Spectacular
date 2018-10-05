class RemoveGlassesTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :glasses
  end
end
