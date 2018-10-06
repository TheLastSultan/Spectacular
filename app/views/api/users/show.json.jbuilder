json.user do
    json.extract! @user , :username, :email, :id
end