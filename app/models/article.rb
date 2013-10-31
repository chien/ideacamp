class Article
  include Mongoid::Document
  include Mongoid::MultiParameterAttributes

  field :title, type: String
  field :content, type: String
  field :url, type: String
  field :author, type: String
  field :summary, type: String
  field :published_at, type: Time

  scope :recent, order_by(:published_at => :desc)
end
