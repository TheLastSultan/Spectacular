class AddPriceFitSunglasses < ActiveRecord::Migration[5.2]
  def change
    add_column :spectacles, :fit, :string
    add_column :spectacles, :price, :float
    add_column :spectacles, :sunglasses, :boolean
  end
end
