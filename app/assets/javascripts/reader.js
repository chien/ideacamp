$( document ).ready(function() {
  function hideArticleSummary() {
    if($("#reader").hasClass("col-lg-8")) {
      $(".content").removeClass("col-lg-12");
      $(".content").addClass("col-lg-4");
      $(".a-content").hide();
    }
  }

  function monitorArticleClick() {
    $(".articles .a-title a").on("click", function(event){
      event.stopPropagation();
      event.preventDefault();
      $("#reader").addClass("col-lg-8");
      hideArticleSummary()
      var el = document.getElementById('reader');
      el.src = $(this).attr("href");
    });
  }

  function monitorInfiniteScroll() {
    hideArticleSummary();
    monitorArticleClick();
  }

  $('.infinite-scroll').jscroll({
    loadingHtml: '<img src="assets/loading.gif" alt="Loading" /> Loading...',
    padding: 20,
    nextSelector: 'a.jscroll-next:last'
  });

  $('.infinite-scroll').on("jscroll.loaded", monitorInfiniteScroll);

  monitorArticleClick();

});
