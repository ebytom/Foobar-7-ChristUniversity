// $(".chevron").click(function(){
//     $(this).toggleClass("rotatechevron"); 
// });

function changechevron(id) {
    document.getElementById(id).classList.toggle('rotatechevron');
}

// $('.dropdown').on('mouseover',()=>{
//     $('.dropdown-parent').addClass('show');
// })

$('.dropdown-menu a.dropdown-toggle').on('mouseover', function(e) {
    if (!$(this).next().hasClass('show')) {
      $(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
    }
    var $subMenu = $(this).next('.dropdown-menu');
    $subMenu.toggleClass('show');
  
  
    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
      $('.dropdown-submenu .show').removeClass('show');
    });
  
  
    return false;
  });



window.onload = () => {
  document.getElementsByClassName('loader')[0].remove()
  document.getElementsByTagName('html')[0].classList.remove('htmlll')
}