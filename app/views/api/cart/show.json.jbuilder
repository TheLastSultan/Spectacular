json.set! @spectacle_cart_item.id do
    json.extract! @spectacle_cart_item :title, :id , :fit, :price, :material
    json.image_url image_path(@spectacle_cart_item.id.to_s + ".jpeg")
end