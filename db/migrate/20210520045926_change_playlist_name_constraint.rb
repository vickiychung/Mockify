class ChangePlaylistNameConstraint < ActiveRecord::Migration[5.2]
  def change
    change_column_null :playlists, :name, true
  end
end
