$(document).ready(function(){
  $('.navigation').toggleClass('active');
  $('.container').toggleClass('active');
  $('.nav_btn').click(function(){
      $('.navigation').toggleClass('active');
      $('.container').toggleClass('active');
  });

  let path = window.location.href; // because the 'href' property of the DOM element is the absolute path
  $('.nav li .link').each(function() {
    let pathh = path.slice(-1);
    if (pathh === '#') {
      path = path.slice(0,-1);
    }
     if (this.href === path) {
        if ($(this).parent().parent().hasClass('dropdown')) {
          $(this).parent().parent().find("a i").addClass('active');
          $(this).parent().parent().find('a').first().addClass('active');
          $(this).parent().addClass('active');
          $(this).addClass('active');
        }
        else {
          $(this).addClass('active');
        }
     }
  });
  $('.nav .dropdown a').click(function(){
    if ($(this).parent().find('.dropdown-nav').hasClass('active')) {
      $('.nav .dropdown a').parent().find('.dropdown-nav').removeClass('active');
      $('.nav .dropdown a').find("i").removeClass('active');
    }
    else if (!$(this).parent().find('.dropdown-nav').hasClass('active')) {
      $('.nav .dropdown a').parent().find('.dropdown-nav').removeClass('active');
      $('.nav .dropdown a').find("i").removeClass('active');
      $(this).parent().find('.dropdown-nav').addClass('active');
      $(this).find("i").addClass('active');
    }
  });

  $('.info .title p').click(function(){
      $('.info .title p').removeClass('active');
      $(this).toggleClass('active');
      let test = $(this).data("id");
      $('.info .content .infos').removeClass('active');
      let clas = '.info .content .'+test;
      $(clas).addClass('active');
  });
  $('.edit').click(function(){
    $('.info .right input').prop("disabled", false);
    $('.info .right select').prop("disabled", false);
    $('.info .right input').first().focus();
    $('.info .right .submit').show();
  });
  $('.upload').click(function(){
    $('#upload').click();
  });

   $('.update_form .field .checkbox').click(function(){
     if ($(this).prop("checked") == true) {
       $('.update_form #check ').css("display", "flex");
         $('.update_form #checked').css("display", "none");
     }
     if ($(this).prop("checked") == false) {
       $('.update_form #checked').css("display", "flex");
       $('.update_form #check ').css("display", "none");
     }
   });
   $('.multiple-select').select2();
   $('.update_form .thum .img_btn button').click(function(){
     let id = $(this).data("id");
     $('.update_form .thum .img_file input').css('display','none');
     $('#'+id).css('display','block');
   });
   $('.update_form .post .img_btn button').click(function(){
     let id = $(this).data("id");
     $('.update_form .post .img_file input').css('display','none');
     $('#'+id).css('display','block');
   });

   $('#story').on("paste",function(e) {
     e.preventDefault();
  });

});
