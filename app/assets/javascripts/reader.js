$( document ).ready(function() {
  function hideCloseReaderButton() {
    $(".close-reader").hide();
  }

  function showCloseReaderButton() {
    $(".close-reader").show();
  }

  function hideArticleSummary() {
    if($("#reader").hasClass("col-lg-8")) {
      $(".content").removeClass("col-lg-12");
      $(".content").addClass("col-lg-4");
      $(".a-content").hide();
    }
  }

  function showArticleSummary() {
    $(".content").addClass("col-lg-12");
    $(".content").removeClass("col-lg-4");
    $(".a-content").show();
  }

  function monitorArticleClick() {
    $(".articles .a-title a").on("click", function(event){
      event.stopPropagation();
      event.preventDefault();
      $("#reader").addClass("col-lg-8").
        css("min-height", window.screen.availHeight - 70);
      hideArticleSummary()
      var el = document.getElementById('reader');
      el.src = $(this).attr("href");
      showCloseReaderButton();
    });
  }

  function hideReader() {
    $("#reader").remove();
    $(".reader-container").append("<iframe id='reader' />");
    showArticleSummary();
  }

  $(".close-reader").on("click", function(event){
    hideReader();
    hideCloseReaderButton();
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
