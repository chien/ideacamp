namespace :feed_fetcher do
  task :rss => [:environment] do
    RSSFeedFetcher.new(FEED_URLS).execute
  end
end
