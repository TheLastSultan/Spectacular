export const fetchSpectacles = () => (
    $.ajax({
      method: 'GET',
      url: '/api/spectacles'
    })
  );
  
  export const fetchSpectacle = id => (
    $.ajax({
      method: 'GET',
      url: `/api/spectacles/${id}`
    })
  );

export const fetchSelectedSpectacles = () => {
    const obj = {shape: "Oval", material:"Polycarbonate" }
    const param = $.param(obj)
    return ($.ajax({
        method: 'POST',
        url: ``
    }))
}


// possible_shapes = ["Round", "Oval", "Square"].sample
//     possible_material = ["Polycarbonate", "Mixed", "Metal"].sample
//     possible_sex = [true, false ].sample
//     possible_staffpick = [true, false].sample

//  create_table "spectacles", force: :cascade do |t|
// t.string "color"
// t.string "shape"
// t.string "material"
// t.boolean "sex"
// t.string "title", null: false
// t.text "description", null: false
// t.boolean "staffpick", null: false
// end