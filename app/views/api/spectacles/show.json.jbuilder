json.set! @spectacle.id do
    json.extract! @spectacle, :id, :title, :sex, :color, 
    :shape, :material, :id, :description, :staffpick, :fit 
end
