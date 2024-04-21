const navIcon = document.querySelectorAll(".mobile-nav-icon")
const container = document.querySelectorAll(".mobile-nav-container")

navIcon.forEach(function (icon) {
    icon.addEventListener("click",function (params) {
        container.forEach(function (con) {
            con.classList.toggle("open-nav")
    con.classList.contains("open-nav") ? icon.innerHTML =` <i class="fa-solid fa-x"></i>` : icon.innerHTML =` <i class="fa-solid fa-bars"></i>`  

        })
    })
})


// const navIcon = document.querySelector(".mobile-nav-icon")
// const container = document.querySelector(".mobile-nav-container")

// navIcon.addEventListener("click",function (params) {
//     container.classList.toggle("open-nav")    
 
//     container.classList.contains("open-nav") ? navIcon.innerHTML =` <i class="fa-solid fa-x"></i>` : navIcon.innerHTML =` <i class="fa-solid fa-bars"></i>`  
    
// })
