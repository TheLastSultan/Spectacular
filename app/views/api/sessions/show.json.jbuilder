json.users do
    json.extract! @user, :id, :email, :username

end
  
json.sessions do
    json.extract! @user, :id
end