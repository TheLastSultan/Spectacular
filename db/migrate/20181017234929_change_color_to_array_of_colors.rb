class ChangeColorToArrayOfColors < ActiveRecord::Migration[5.2]
  def change
    remove_column :spectacles, :color
    add_column :spectacles, :color, :text, array: true, default: []
  end
end
