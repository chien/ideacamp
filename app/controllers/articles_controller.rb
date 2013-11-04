class ArticlesController < ApplicationController
  def index
    @page = (params[:page] || 1).to_i
    @articles = Article.recent.page(@page)
    render layout: false
  end
end
