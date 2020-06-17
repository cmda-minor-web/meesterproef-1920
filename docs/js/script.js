

/*
  *** HASH ***
  In het menu staan 3 knoppen,
  die verwijzen met een hash naar bijhorende artikelen.
  Het tweede menu krijgt een highlight als er op is geklikt.
*/

const knoppen = document.querySelectorAll("main nav a");
// const nav = document.querySelector("main nav");

window.addEventListener('hashchange', function(){
    // console.log('The hash has changed!', location.hash);
  clear_selected();
  set_selected();
});

function set_selected(){
  var nav = document.querySelector("main nav a[href='"+location.hash+"']");
  nav.classList.add("selected");
}
function clear_selected(){
  knoppen.forEach(function(knop){
    knop.classList.remove("selected");
  })
}
if(location.hash) set_selected(); //init


/*
  *** INTERSECTION OBSERVER ***
  Als er wordt gescrollt,
  krijgt het menu een highlight van het betreffende onderdeel

  MDN https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
  https://alligator.io/js/intersection-observer
*/

// const programma = document.querySelector('#programma');
// const projecten = document.querySelector('#projecten');
// const about = document.querySelector('#about');



observer = new IntersectionObserver(entries => {
  console.log(entries[0].target.id);
  //location.hash = entries[0].target.id;
});

// const articles = document.querySelectorAll('main > article');
// articles.forEach(article => {
//   observer.observe(article);
// });

const projecten = document.querySelector('#about');
observer.observe(projecten);
