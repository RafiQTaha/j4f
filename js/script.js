const nav = document.querySelector("nav"),
nav_btn = document.querySelector("nav .nav_btn"),
nav_bar = document.querySelector("nav .nav_bar"),
nav_btn_i = document.querySelector("nav .nav_btn i"),
favorite = document.querySelectorAll(".play_trailer button"),
posts = document.querySelector(".posts .post__list");

$(document).ready(function(){
      $(favorite).click(function(){
      $(this).toggleClass("add");
        // lets AJAX

      });
      $(window).scroll(function(){
          if (this.scrollY > 30) {
              $(nav).addClass("sticky");
          }else {
              $(nav).removeClass("sticky");
          }
      });
      $(nav_btn).click(function(){
        $(nav_bar).toggleClass("active");
        $(nav_btn_i).toggleClass("active");
        $("body").toggleClass("active");
      });
});
