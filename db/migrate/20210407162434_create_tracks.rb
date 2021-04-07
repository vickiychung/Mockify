class CreateTracks < ActiveRecord::Migration[5.2]
  def change
    create_table :tracks do |t|
      t.integer :album_id, null: false
      t.string :name, null: false
      t.float :length, null: false

      t.timestamps
    end

    add_index :tracks, :album_id
  end
end
