@spectacles.each do |spectacle|
    json.set! spectacle.id do
        json.image_url image_path(spectacle.id.to_s + ".jpeg")
        json.extract! spectacle, :id, :title do
            json.extract! spectacle, :sex, :shape, :material, :id
            json.image_url image_path(spectacle.id.to_s + ".jpeg")
        end
    end
end 