json.users do
    json.set! @user.id do
        json.extract! @user, :id, :email, :username
    end
end
  
json.sessions do
    json.extract! @user, :id
end