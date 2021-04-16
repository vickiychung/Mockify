class Api::PlaylistsController < ApplicationController
  def index
    @playlists = Playlist.where(user_id: current_user.id)
    render :index
  end

  def show
    @playlist = Playlist.find_by(id: params[:id])

    if @playlist
      render :show
    else
      render json: @playlist.errors.full_messages, status: 422
    end
  end

  def create
    @playlist = Playlist.new(playlist_params)

    if @playlist.save!
      render '/api/playlists/_playlists'
    else
      render json: @playlist.errors.full_messages, status: 422
    end
  end

  def update
    @playlist = Playlist.find_by(id: params[:id])

    if @playlist.save
      render :show
    else
      render json: @playlist.errors.full_messages, status: 422
    end
  end

  def destroy
    @playlist = Playlist.find_by(id: params[:id])

    if @playlist
      @playlist.destroy
      render json: @playlist.id
    else
      render json: @playlist.errors.full_messages, status: 422
    end
  end

  private

  def playlist_params
    params.require(:playlist).permit(:user_id, :name)
  end
end
