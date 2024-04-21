

document.addEventListener("DOMContentLoaded",function (params) {


  const topBtn = document.querySelector(".top-btn")
const bottomBtn = document.querySelector(".bottom-btn")
const slideContents = document.querySelectorAll(".slide-contents")



function handlebtnClick(direction) {


  const currentIntex = parseInt(document.querySelector(".slide-contents.active").getAttribute('data-index'))
  let nextindex;
  
  if (direction==="top") {

      if (currentIntex==1) {
          nextindex=2;
      }
      else{
      nextindex=currentIntex -1;
      }

  }
  else{
      nextindex=currentIntex +1

      if (currentIntex==2) {
          nextindex=1
      }
      else{
      nextindex=currentIntex +1;
      }
  }

  const nextSlide = document.querySelector(`.slide-contents[data-index="${nextindex}"]`)
  console.log(nextSlide);
  if (nextSlide) {
      nextSlide.scrollIntoView({behavior:"smooth",block:"start"})
      document.querySelector(".slide-contents.active").classList.remove("active")
      document.querySelector(".s-image.img-show").classList.remove("img-show")
      document.querySelector(".slide-info h1.slide-info-show").classList.remove("slide-info-show")
      nextSlide.classList.add("active")

      setTimeout(() => {
          nextSlide.querySelector(".s-image").classList.add("img-show")
          nextSlide.querySelector(".slide-info h1").classList.add("slide-info-show")
      }, 300);
  }


}


topBtn.addEventListener("click",()=> handlebtnClick("top"))
bottomBtn.addEventListener("click",()=> handlebtnClick("bottom"))
  
})