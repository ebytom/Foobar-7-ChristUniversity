// $(".chevron").click(function(){
//     $(this).toggleClass("rotatechevron"); 
// });

function changechevron(id) {
    document.getElementById(id).classList.toggle('rotatechevron');
}

// $('.dropdown').on('mouseover',()=>{
//     $('.dropdown-parent').addClass('show');
// })
$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
  if (!$(this).next().hasClass('show')) {
    $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
  }
  var $subMenu = $(this).next(".dropdown-menu");
  $subMenu.toggleClass('show');


  $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
    $('.dropdown-submenu .show').removeClass("show");
  });


  return false;
});

window.onload = () => {
  document.getElementsByClassName('loader')[0].remove()
  document.getElementsByTagName('html')[0].classList.remove('htmlll')
}


const events ={
  "tech": [
      "Break the query",
      "Codeathon",
      "Illustra",
      "AI Hackathon",
      "Ideathon",
      "Short Game Development",
      "CSS Battle",
      "Tech Quiz",
      "Web Development"
  ],
  "nontech": [
      "Blind Typing",
      "Flix N Manga",
      "Ace Clutch",
      "Image Brush",
      "Poster"
  ],
  "workshop":[
      "Web Development",
      "Game Development",
      "Java Programming",
      "C Programming",
      "Research"
  ]
}
// import events from './events.json'
console.log(events);
// const events = require('../json/events.json');

events.tech.map(event=>{
  var elem = `<div class="elecard"><a>${event}<a></div>`
  document.getElementById('childdiv1').innerHTML += elem;
})

events.nontech.map(event=>{
  var elem = `<div class="elecard">${event}</div>`
  document.getElementById('childdiv2').innerHTML += elem;
})

events.workshop.map(event=>{
  var elem = `<div class="elecard">${event}</div>`
  document.getElementById('childdiv3').innerHTML += elem;
})