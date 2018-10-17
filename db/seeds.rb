(1..10).each do |i|
    User.create!(
        username: "hello#{i}",
        email: "hello#{i}",
        password: "password",
        guest_user: false
    )
end

p "created 10 users"


(1..49).each do |i|
    possible_title= [Faker::Book.genre,
                    Faker::Book.publisher, 
                    Faker::Ancient.god, 
                    Faker::Address.state,
                    Faker::Coffee.blend_name].sample


    felix = (1..8).to_a + [12,13] + (22..27).to_a + [31,32,34,35,42,46,47,48 ,50]
    hardey = [9,10,11,14,15,16,17,18,20,21,28,30,33,45]
    hawkins = [19,29,36,37,38,39,40,41,43,44,49]
    description = nil 
    material = nil
    shape = nil 

    if felix.any?{|id| id == i }
        description = "felix"
        material = ["acetate", "mixed"].sample
        shape = "square"
    elsif hardey.any?{|id| id == i}
        description = "hardey"
        material = "mixed"
        shape= "rectangle"
    else
        description = "hawkins"
        material= ["metal","mixed"].sample
        shape= "oval"
    end

    possible_shapes = ["Round", "Oval", "Square"].sample
    possible_material = ["Polycarbonate", "Mixed", "Metal"].sample
    possible_fit = ["Narrow", "Medium", "Wide"].sample
    possible_price = (100..200).to_a.sample
    possible_sex = [true, false ].sample
    possible_staffpick = [true, false].sample

    Spectacle.create!(
        color: Faker::Color.color_name, 
        shape: shape,
        description: description,
        title: possible_title,
        fit: possible_fit,
        price: possible_price, 
        material: material,
        sex: possible_sex,
        staffpick: possible_staffpick
    )
end

p "created 50 spectacle details"

(1..48).each do |i|
    Cartitem.create!(
        spectacle_id: i,
        user_id: (9 % i) + 1
    )
end

p "created 50 cart items"
