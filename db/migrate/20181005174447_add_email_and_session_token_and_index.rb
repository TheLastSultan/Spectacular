class AddEmailAndSessionTokenAndIndex < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :session_token, :string
    add_index :users, :session_token, options: "custom_index_name"
    #Ex:- add_index("admin_users", "username")
    
  end
end
