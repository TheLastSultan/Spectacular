User.create!(
    username: "hello",
    password_digest: "hello"
)

50.times do |i|
    possible_title= [Faker::Book.genre,
                    Faker::Book.publisher, 
                    Faker::BossaNova.song, 
                    Faker::DragonBall.character].sample

    possible_shapes = ["Round", "Oval", "Square"].sample
    possible_material = ["Polycarbonate", "Mixed", "Metal"].sample
    possible_sex = [true, false ].sample
    possible_staffpick = [true, false].sample

    Spectacle.create!(
        color: Faker::Color.color_name, 
        shape: possible_shapes,
        description: Faker::Hipster.paragraph(2, true),
        title: possible_title,
        material: possible_material,
        sex: possible_sex,
        staffpick: possible_staffpick
    )
end






