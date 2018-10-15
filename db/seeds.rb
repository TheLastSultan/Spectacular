(1..10).each do |i|
    User.create!(
        username: "hello#{i}",
        email: "hello#{i}",
        password: "password"
    )
end

p "created 10 users"

50.times do |i|
    possible_title= [Faker::Book.genre,
                    Faker::Book.publisher, 
                    Faker::BossaNova.song, 
                    Faker::DragonBall.character].sample

    possible_shapes = ["Round", "Oval", "Square"].sample
    possible_material = ["Polycarbonate", "Mixed", "Metal"].sample
    possible_fit = ["Narrow", "Medium", "Wide"].sample
    possible_price = (100..200).to_a.sample
    possible_sex = [true, false ].sample
    possible_staffpick = [true, false].sample

    Spectacle.create!(
        color: Faker::Color.color_name, 
        shape: possible_shapes,
        description: Faker::Hipster.paragraph(5, true),
        title: possible_title,
        fit: possible_fit,
        price: possible_price, 
        material: possible_material,
        sex: possible_sex,
        staffpick: possible_staffpick
    )
end

p "created 50 spectacle details"


(1..49).each do |i|
    Cartitem.create!(
        spectacle_id: i,
        user_id: (9 % i) + 1
    )
end

p "created 50 cart items"

