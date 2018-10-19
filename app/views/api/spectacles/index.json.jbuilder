@spectacles.each do |spectacle|
    json.set! spectacle.id do
        json.image_url image_path(spectacle.id.to_s + ".jpeg")
        json.extract! spectacle, :id, :title, :fit , :description, :color, :staffpick
    end
end 