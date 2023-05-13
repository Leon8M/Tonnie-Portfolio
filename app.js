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