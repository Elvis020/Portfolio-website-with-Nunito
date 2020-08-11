$(document).ready(function () {

  // 😜 Toggling the nav button
  $('.menu-toggler').on('click', function () {
    $(this).toggleClass('open');
    $('.top-nav').toggleClass('open');
  });

  // 😜 Toggling-off the nav button
  $('.top-nav').on('click', function () {
    $('.menu-toggler').removeClass('open');
    $('.top-nav').removeClass('open');
  });

  // Animating scrolling when you click on a nav link
  $('nav a[href*="#"]').on('click', function () {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 100
    }, 2000);
  });


  // The pulsating button with animation
  $('#up').on('click', function () {
    $('html, body').animate({
      scrollTop: 0
    }, 2000);
  });


  AOS.init({
    easing: 'ease',
    duration: 1800,
    once: true
  })

});