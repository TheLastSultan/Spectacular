@spectacles.each do |spectacle|
    json.set! spectacle.id do
        json.extract! spectacle, :id, :title do
            json.extract! spectacle, :sex, :shape, :material, :id
        end
    end
end 