

// $('#mario').mouseenter(function() {
//     $('#mario').addClass('colore')
// })
// $('#mario').mouseleave(function() {
//     $('#mario').removeClass('colore')
// })

// var elemento= document.getElementById('mario');
//
// console.log(document.getElementById('mario').className);
// console.log(elemento.className);
//
// elemento.addEventListener('click', function(){
//     alert('BOOM');
// });

// $(".header-right > a").click(function(){
//     $(".hamburger-menu").addClass("active");
//
// });
//
// $(".close").click(function(){
//     $(".hamburger-menu").removeClass("active");
//
// });
$(".header-right > a, .close").click(function(){
    $(".hamburger-menu").toggleClass("active");

});
