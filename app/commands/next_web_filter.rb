require 'nokogiri'

class NextWebFilter < SimpleDelegator
  def self.valid_for?(feed_url)
    feed_url == "http://feeds.feedburner.com/thenextweb"
  end

  def content
    page = Nokogiri::HTML(super)
    page.css(".readmore").first.remove
    page.to_html
  end

  def summary
    page = Nokogiri::HTML(super)
    page.css(".readmore").first.remove
    page.to_html
  end
end
