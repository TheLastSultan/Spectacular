class CreateCartitems < ActiveRecord::Migration[5.2]
  def change
    create_table :cartitems do |t|
      t.integer :user_id
      t.integer :glasses_id

      t.timestamps
    end
  end
   
end
