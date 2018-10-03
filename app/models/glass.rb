class Glass < ApplicationRecord

    has_many :cartitems,
    foreign_key: :glasses_id,
    class_name: "Cartitem"

    has_many :users,
    through: :cartitems,
    source: :user

    

end
