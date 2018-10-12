class User < ApplicationRecord


    has_many :cartitems,
    foreign_key: :user_id,
    class_name: "Cartitem"


    has_many :cart,
    through: :cartitems,
    source: :spectacle
    

    validates :username, :email, :session_token, :password_digest, presence: true
    validates :username, :email, uniqueness: true
    validates :password, length: {minimum: 6, allow_nil: true}
    before_validation :ensure_session_token
    
    attr_reader :password
    
    def password=(pw)
        @password = pw
        self.password_digest = BCrypt::Password.create(pw)
    end
    
    def is_password?(pw)
        BCrypt::Password.new(password_digest).is_password?(pw)
    end
    
    def self.find_by_credentials(username, pw)
        user = User.find_by(username: username)
        if user && user.is_password?(pw)
        return user
        end
        nil
    end
    
    def self.token
        SecureRandom.urlsafe_base64
    end
    
    def ensure_session_token
        self.session_token ||= User.token
    end
    
    def reset_session_token!
        self.session_token = User.token
        self.save
        self.session_token
    end


end
