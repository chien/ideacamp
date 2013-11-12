class RSSFeedFetcher
  def initialize(feed_urls)
    @feed_urls = feed_urls
  end

  def execute
    feeds = Feedzirra::Feed.fetch_and_parse(feed_urls)

    feeds.each do |url, feed_burner|
      begin
        feed_burner.entries.each do |entry|
          filtered_entry = filtered_entry_for(url, entry)
          article = Article.find_or_initialize_by(url: filtered_entry.url)
          article.attributes = {
            title: filtered_entry.title,
            content: filtered_entry.content,
            url: filtered_entry.url,
            author: filtered_entry.author,
            summary: filtered_entry.summary,
            published_at: filtered_entry.published
          }
          article.save!
        end
      rescue Exception => e
        puts "#{url} fetch failed!"
      end
    end
  end

  private

  attr_reader :feed_urls

  def filtered_entry_for(feed_url, entry)
    if filter = filter_for(feed_url)
      filter.new(entry)
    else
      entry
    end
  end

  def filter_for(feed_url)
    filters.detect do |filter|
      filter.valid_for?(feed_url)
    end
  end

  def filters
    [VentureBeatFilter]
  end
end
