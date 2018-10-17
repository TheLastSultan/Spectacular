
@cartitems.each do |spectacle|
    json.set! spectacle.id do
        json.extract! spectacle, :title, :id , :fit, :price, :material
        json.image_url image_path(spectacle.id.to_s + ".jpeg")
    end
end



json.cart_count @cartitems.length
json.price_total @cartitems.map{|item| item.price}.sum

