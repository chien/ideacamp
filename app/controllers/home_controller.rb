class HomeController < ApplicationController
  def index
    @articles = Article.recent.page(params[:page]).per(10)
  end
end
