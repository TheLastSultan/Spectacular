class AddGuestUserBooleanToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :guest_user, :boolean, :default => false
  end
end
