class User < ApplicationRecord


    has_many :cartitems,
    foreign_key: :user_id,
    class_name: "Cartitem"


    has_many :glasses,
    through: :cartitems,
    source: :glass
    

end
