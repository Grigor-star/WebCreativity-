const btns = document.querySelectorAll(".nav-btn");
const slideVideos = document.querySelectorAll(".video-slide")
const introInner = document.querySelectorAll(".intro_inner")
let sliderNav = function(manual){
    btns.forEach((btn) => {
        btn.classList.remove("active")
    })
    
    slideVideos.forEach((slide) => {
        slide.classList.remove("active")
    })
    
    introInner.forEach((content) =>{
        content.classList.remove("active")
    })
    
    btns[manual].classList.add("active");
    slideVideos[manual].classList.add("active");
    introInner[manual].classList.add("active")
}
btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
    sliderNav(i);
    })
})
