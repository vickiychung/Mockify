class Api::TracksController < ApplicationController
  def index
    @tracks = Track.all
    render :index
  end

  def show
    @track = Track.find_by(id: params[:id])
    render :show
  end

  def create
    @playlist_track = PlaylistTrack.new(
      playlist_id: params[:playlist_id], 
      track_id: params[:track_id])

    if @playlist_track.save
      render json: params[:track_id]
    else
      render json: @playlist_track.errors.full_messages, status: 422
    end
  end

  def destroy
    @playlist_track = PlaylistTrack.find_by(
      playlist_id: params[:playlist_id], 
      track_id: params[:track_id])

    if @playlist_track
      @playlist_track.destroy
      render json: @playlist_track.track_id
    else
      render json: @playlist_track.errors.full_messages, status: 422
    end
  end
end
