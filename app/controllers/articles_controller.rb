class ArticlesController < ApplicationController
  def index
    @articles = Article.recent.page(params[:page]).per(10)
    render layout: false
  end
end
