@cartitems.each do |spectacle|
    json.extract! spectacle, :title, :id , :fit, :price, :material
    json.image_url image_path(spectacle.id.to_s + ".jpeg")
end 

json.cart_count @cartitems.length