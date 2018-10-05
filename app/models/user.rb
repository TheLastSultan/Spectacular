class User < ApplicationRecord


    has_many :cartitems,
    foreign_key: :user_id,
    class_name: "Cartitem"


    has_many :cart,
    through: :cartitems,
    source: :spectacle
    

end
