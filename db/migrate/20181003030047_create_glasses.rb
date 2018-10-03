class CreateGlasses < ActiveRecord::Migration[5.2]
  def change
    create_table :glasses do |t|
      t.string :color
      t.string :shape
      t.string :material
      t.boolean :sex
      t.string :img_url, null: false 
      t.string :title, null: false 
      t.text :description, 
      t.boolean :staffpick

      t.timestamps
    end
  end
end
