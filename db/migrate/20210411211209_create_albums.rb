class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
      t.integer :artist_id, null: false
      t.string :title, null: false
      t.string :year

      t.timestamps
    end

    add_index :albums, :artist_id
  end
end
