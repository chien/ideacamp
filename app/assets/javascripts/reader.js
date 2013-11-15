$( document ).ready(function() {
  function hideCloseReaderButton() {
    $(".close-reader").hide();
  }

  function showCloseReaderButton() {
    $(".close-reader").show();
  }

  function hideArticleSummary() {
    if($("#reader").hasClass("col-lg-8")) {
      reduceContentWidth();
      $(".a-content").hide();
    }
  }

  function reduceContentWidth() {
    $(".content").removeClass("col-lg-12").
      addClass("col-lg-4").
      addClass("hidden-xs");
  }

  function increaseContentWidth() {
    $(".content").addClass("col-lg-12").
      removeClass("col-lg-4").
      removeClass("hidden-xs");
  }

  function showArticleSummary() {
    increaseContentWidth();
    $(".a-content").show();
  }

  function monitorArticleClick() {
    $(".articles .a-title a").on("click", function(event){
      event.stopPropagation();
      event.preventDefault();

      showReader();
      hideArticleSummary()
      var el = document.getElementById('reader');
      el.src = $(this).attr("href");
    });
  }

  function showReader() {
    $("#reader").addClass("col-lg-8 col-xs-11").
      css("min-height", window.screen.availHeight - 70);
    showCloseReaderButton();
  }

  function hideReader() {
    $("#reader").remove();
    $(".reader-container").append("<iframe id='reader' />");
    hideCloseReaderButton();
  }

  $(".close-reader").on("click", function(event){
    hideReader();
    showArticleSummary();
  });

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
  hideCloseReaderButton();

});
