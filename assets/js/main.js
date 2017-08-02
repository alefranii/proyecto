$( document ).ready(function() {
   $(".burg-button").click(function(){
     $(".burg-button").toggleClass("active");
     $(".burg-menu").slideToggle();
   });
});


$("#myCarousel").carousel();

$(".item").click(function(){
    $("#myCarousel").carousel(1);
});

$(".left").click(function(){
    $("#myCarousel").carousel("prev");
});

$('.carousel').carousel({
     interval: 5000,
});
