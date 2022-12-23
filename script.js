function toggleMode(){
 const html= document.documentElement

//  if (html.classList.contains('light')) {
//   html.classList.remove('light')
//  } else {
//   html.classList.add('light')
//  }

html.classList.toggle('light')

}

function showSwiper() {
  const showSlide = document.getElementById('swiper')
  if (showSlide.style.display === "none"){
    showSlide.style.display = "block"
  } else {
    showSlide.style.display = "none"
  }
}

function showAbout(){
  const about = document.getElementById('about')
  if(about.style.display === "none"){
    about.style.display = "block"
  } else {
    about.style.display = "none"
  }
}

const swiper = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 25,
  freeMode: true,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
})