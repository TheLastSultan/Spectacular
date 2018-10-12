json.user do
    json.extract! @user, :id, :email, :username , :session_token 
end
  
json.sessions do
    json.extract! @user, :id
end