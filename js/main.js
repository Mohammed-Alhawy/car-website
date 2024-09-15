/*=============== SHOW MENU ===============*/
const open_menu_icon=document.getElementById("nav_toggel")
const close_menu_icon=document.getElementById("nav_close")
const nav_menu=document.getElementById("nav_menu")

function openMenu() {
    nav_menu.style.right="0"
}
open_menu_icon.onclick=openMenu
/*=============== REMOVE MENU MOBILE ===============*/
function closeMenu() {
  nav_menu.style.right="-100% "
}
close_menu_icon.onclick=closeMenu

/*=============== 
  function remove active class from the all links &
  add to the reale active link and close menu whene click on any link 
  ===============*/


const All_links=document.querySelectorAll("header ul a")

All_links.forEach((Link)=>{
  Link.addEventListener("click" , ()=>{

    All_links.forEach(item=>{ 
      item.classList.remove("activ_li")
    })

    Link.classList.add("activ_li")
    closeMenu()
  })
})



/*=============== CHANGE BACKGROUND HEADER ===============*/
const header =document.getElementById("header")

function scrollHeader() {
  if (window.scrollY>= 50) {
    header.classList.add("scroll-header")
  }
  else{
    header.classList.remove("scroll-header")
  }
}

window.addEventListener("scroll" ,scrollHeader)

/*=============== POPULAR SWIPER ===============*/
let swiperPopular = new Swiper(".popular_container", {
  slidesPerView: 3,
  spaceBetween: 22,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
  loop: true,


  
  breakpoints: {
  
    870: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    550: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },

});

/*=============== MIXITUP FILTER FEATURED ===============*/

let mixerfeatured = mixitup('.featured_content', {
  selectors: {
      target: '.featured_card'
  },
  animation: {
      duration: 300
  }
});

/* Link active featured */ 
const LinkFeatured =document.querySelectorAll(".featured_item")

function activeFeatured() {
  LinkFeatured.forEach(l=>{
    l.classList.remove('active_link')
    this.classList.add("active_link")
  })
}

LinkFeatured.forEach(l=>{l.addEventListener('click' , activeFeatured)})
/*=============== SHOW SCROLL UP ===============*/ 

function showscroll() {
  const scrollup=document.getElementById("Scroll-up");
  if (window.scrollY>=350) {
    scrollup.classList.add("Show-Scroll-Up");
  } else{
    scrollup.classList.remove("Show-Scroll-Up");
  }
}

window.addEventListener("scroll" , showscroll)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
