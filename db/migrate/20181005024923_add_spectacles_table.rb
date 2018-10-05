class AddSpectaclesTable < ActiveRecord::Migration[5.2]
  def change
    create_table :spectacles do |t|
      t.string :color
      t.string :shape
      t.string :material
      t.boolean :sex
      t.string :title, null: false 
      t.text :description, null: false
      t.boolean :staffpick, null: false
    end
  end
end
