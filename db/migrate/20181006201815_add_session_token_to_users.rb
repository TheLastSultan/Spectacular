class AddSessionTokenToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :session_token, :string
    add_index :users, :session_token
    #Ex:- add_column("admin_users", "username", :string, :limit =>25, :after => "email")
  end
end
