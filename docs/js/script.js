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
set_selected(); //init
