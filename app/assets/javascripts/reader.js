$( document ).ready(function() {
  $(".articles a").on("click", function(event){
    event.stopPropagation();
    event.preventDefault();
    var el = document.getElementById('reader');
    el.src = $(this).attr("href");
  });

  $('.infinite-scroll').jscroll({
    loadingHtml: '<img src="loading.gif" alt="Loading" /> Loading...',
    padding: 20,
    nextSelector: 'a.jscroll-next:last'
  });

  $('.infinite-scroll').on("jscroll.loaded", function(){
    $(".articles a").on("click", function(event){
      event.stopPropagation();
      event.preventDefault();
      var el = document.getElementById('reader');
      el.src = $(this).attr("href");
    });
  });

});
