json.user do
    json.set! @user.id do
        json.extract! @user , :username, :email, :id
    end
end