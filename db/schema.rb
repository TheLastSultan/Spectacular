# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_10_17_234929) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cartitems", force: :cascade do |t|
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "spectacle_id"
    t.index ["spectacle_id"], name: "index_cartitems_on_spectacle_id"
    t.index ["user_id", "spectacle_id"], name: "index_cartitems_on_user_id_and_spectacle_id"
    t.index ["user_id"], name: "index_cartitems_on_user_id"
  end

  create_table "spectacles", force: :cascade do |t|
    t.string "shape"
    t.string "material"
    t.boolean "sex"
    t.string "title", null: false
    t.text "description", null: false
    t.boolean "staffpick", null: false
    t.string "fit"
    t.float "price"
    t.boolean "sunglasses"
    t.text "color", default: [], array: true
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "session_token"
    t.string "email"
    t.boolean "guest_user", default: false
    t.index ["session_token"], name: "index_users_on_session_token"
  end

end
