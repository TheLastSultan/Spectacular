@spectacles.each do |spectacle|
    json.count @spectacles.length
    json.set! spectacle.id do
        json.image_url image_path(spectacle.id.to_s + ".jpeg")
        json.cart_status @carted_ids.any?{ |item_id| item_id == spectacle.id}
        json.extract! spectacle, :id, :title do
            json.extract! spectacle, :sex, :shape, :material, :id, :fit, :staff_pick
            json.image_url image_path(spectacle.id.to_s + ".jpeg")
        end
    end
end 
