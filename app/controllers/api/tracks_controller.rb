class Api::TracksController < ApplicationController
  before_action :require_logged_in!

  def show
    @track = Track.find(id: params[:id])
    render :show
  end
end
