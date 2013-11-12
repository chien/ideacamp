require 'nokogiri'

class VentureBeatFilter < SimpleDelegator
  def self.valid_for?(feed_url)
    feed_url == "http://feeds.feedburner.com/venturebeat"
  end

  def content
    page = Nokogiri::HTML(super)
    node = page.css(".mf-viral").first
    remove_next_element(node)
    page.to_html
  end

  def summary
    page = Nokogiri::HTML(super)
    node = page.css(".mf-viral").first
    remove_next_element(node)
    page.to_html
  end

  private

  def remove_next_element(node)
    unless node.next_element.nil?
      remove_next_element(node.next_element)
    end
    node.remove
  end
end
