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
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(".nav_item a[href*=" + sectionId + "]").classList.add("activ_li");
    } else {
      document.querySelector(".nav_item a[href*=" + sectionId + "]").classList.remove("activ_li");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr =ScrollReveal({
  origin:'top',
  distance : '60px', 
  duration:2500,
  delay:400,
  reset: true
})

sr.reveal(`.home_title , .popular__card , .features_img , .featured_item`)
sr.reveal(`.home_subtitle` , {delay:500})
sr.reveal(`.home_elec` , {delay:600})
sr.reveal(`.home_img` , {delay:800})
sr.reveal(`.home_car_data` , {delay:900 , interval:100 , origin:'bottom'})
sr.reveal(`.home_button` , {delay:1000 , origin:'bottom'})

sr.reveal(`.about_group, .features_card_1 , .features_card_3 , .offer_text` , {delay:800 , origin:'left'})
sr.reveal(`.about_data , .features_card_2 , .offer_img` , {delay:800 , origin:'right'})
sr.reveal(`.featured_card , .logos_content , .footer_content` , {interval:100})

