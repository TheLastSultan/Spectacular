json.set! @spectacle_cart_item.id do
    json.extract! spectacle, :title, :id , :fit, :price, :material
    json.image_url image_path(spectacle.id.to_s + ".jpeg")
end