@spectacles.each do |spectacle|
    json.count @spectacles.length
    json.set! spectacle.id do
        json.image_url image_path(spectacle.id.to_s + ".jpeg")
        json.extract! spectacle, :id, :title do
            json.extract! spectacle, :sex, :shape, :material, :id, :fit, :staff_pick
            json.image_url image_path(spectacle.id.to_s + ".jpeg")
        end
    end
end 