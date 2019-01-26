$(function() {                       //run when the DOM is ready
  $(".black").click(function() {  //use a class, since your ID gets mangled
    $(this).toggleClass("black-active");
    $('.white').toggleClass("white-goaway");
    $('.box__content').toggleClass("box__content--active");

  });
  $(".white").click(function() {  //use a class, since your ID gets mangled
    $(this).toggleClass("white-active");
    $('.black').toggleClass("black-goaway");
    $('.box__content--two').toggleClass("box__content--two--active");
  });
});
$(document).mousemove(function(e) {
  var x = e.pageX;
  var y = e.pageY;
  
  $('.cursor').css('left', x - 5)
  $('.cursor').css('top', y - 5)
})

$(document).mousemove(function(e) {
  var x = e.pageX;
  var y = e.pageY;
  
  $('.cursor__two').css('left', x + 20 )
  $('.cursor__two').css('top', y + 50)
})

$('.buy').hover(
       function(){ $('.cursor').addClass('cursor--grow') },
       function(){ $('.cursor').removeClass('cursor--grow') }
)

$(".left").hover(function(){
  $(".cursor").toggleClass("cursor--left");
});

$(".right").hover(function(){
  $(".cursor").toggleClass("cursor--right");
});

$(".left").click(function(){
  $(".cursor").toggleClass("cursor--left-on");
});

$(".right").click(function(){
  $(".cursor").toggleClass("cursor--right-on");
});