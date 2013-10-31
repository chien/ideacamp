class RSSFeedFetcher
  def initialize(feed_urls)
    @feed_urls = feed_urls
  end

  def execute
    feeds = Feedzirra::Feed.fetch_and_parse(feed_urls)

    feeds.each do |url, feed_burner|
      begin
        feed_burner.entries.each do |entry|
          article = Article.find_or_initialize_by(url: entry.url)
          article.attributes = {
            title: entry.title,
            content: entry.content,
            url: entry.url,
            author: entry.author,
            summary: entry.summary,
            published_at: entry.published
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
end
