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
      "UI UX",
      "AI Hackathon",
      "Ideathon",
      "Short game dev",
      "CSS Battle",
      "Tech Quiz",
      "Web Dev"
  ],
  "nontech": [
      "Blind Line Typping",
      "Movie/Anime Quiz",
      "Ace Clutch",
      "Image brush",
      "Poster"
  ],
  "workshop":[
      "Webdev",
      "Research",
      "Gaming",
      "Java Programming",
      "C Programming"
  ]
}
// import events from './events.json'
console.log(events);
// const events = require('../json/events.json');

events.tech.map(event=>{
  var elem = `<div class="elecard">${event}</div>`
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