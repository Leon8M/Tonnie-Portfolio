let box = document.querySelector('.box')
let logo = document.querySelector('.logo')

window.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(()=>{
        setTimeout(()=>{
            box.style.animation = 'splash 1s ease forwards 2.2s';
        },400)
   })
      
})  
var scrollLinks = document.querySelectorAll(".scroll-link");

for (var i = 0; i < scrollLinks.length; i++) {
  scrollLinks[i].addEventListener("click", function(event) {
    event.preventDefault(); // prevent the default behavior of the link
    var targetId = this.getAttribute("href");
    var targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" }); // scroll to the target element
  });
}
const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.drop');
const dropDown = document.querySelector('.dropdown');
var arrow = './images/arrow.png';
var cancel = './images/cancel.png';
var isAlternate = false;

toggleBtn.addEventListener("click", function (){
  dropDown.classList.toggle('open');
  const isOpen = dropDown.classList.contains('open');
  if (isAlternate){
    toggleBtnIcon.src = arrow;
    isAlternate = false;
  } else{
    toggleBtnIcon.src = cancel;
    isAlternate = true;
  }
});