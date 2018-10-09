class AddPriceFitSunglasses < ActiveRecord::Migration[5.2]
  def change
    add_column :spectacles, :fit, :string
    add_column :spectacles, :price, :float
    add_column :spectacles, :sunglasses, :boolean
    #Ex:- add_column("admin_users", "username", :string, :limit =>25, :after => "email")
    #Ex:- add_column("admin_users", "username", :string, :limit =>25, :after => "email")
    #Ex:- add_column("admin_users", "username", :string, :limit =>25, :after => "email")
  end
end
