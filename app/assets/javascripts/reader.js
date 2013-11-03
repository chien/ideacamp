$( document ).ready(function() {
  $(".articles a").on("click", function(event){
    event.stopPropagation();
    event.preventDefault();
    var el = document.getElementById('reader');
    el.src = $(this).attr("href");
  });
});
