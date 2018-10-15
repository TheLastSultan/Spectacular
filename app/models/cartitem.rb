class Cartitem < ApplicationRecord

    validates :user, uniqueness: { scope: :spectacle_id }

    belongs_to :user

    belongs_to :spectacle

end
