@spectacles.each do |spectacle|
    json.set! spectacle.id do
        json.image_url image_path(spectacle.id.to_s + ".jpeg")
        json.extract! spectacle, :id, :title, :fit , :description, :color, :staffpick, :price
        json.cart_status current_user.cart.any?{ |cart_spectacle| cart_spectacle.id == spectacle.id }
    end
end 