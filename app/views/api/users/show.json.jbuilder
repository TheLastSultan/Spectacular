json.user do
    json.extract! @user , :username, :email, :id, :guest_user
end