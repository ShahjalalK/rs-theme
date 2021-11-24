const menubar = document.querySelector('.menubar')
const faBars = document.querySelector('.fa-bars') 
function iconMenu(){
  menubar.classList.toggle('active')  
  faBars.classList.toggle('fa-times')
}

const header = document.querySelector('.header')
document.addEventListener('scroll', () => {
    const x = pageYOffset;
    if (x > 180) {
        header.classList.add('active')
    } else {
        header.classList.remove('active')
    }
    menubar.classList.remove('active')
    faBars.classList.remove('fa-times')
})

const navLinks = document.querySelectorAll('.menubar a')

navLinks.forEach(link => {

    link.addEventListener('click', () => {
        navLinks.forEach(a => {
            if(a.classList.contains('active')){
                a.classList.remove('active')
            }
        })
      link.classList.add('active')        
    })
})



function timeline(){
    const tl = gsap.timeline()
    tl.from("#home .content .title", {
        duration: 1, ease: "back", y: -10000 + 5000, opacity: 0, 
    })
    tl.from("#home .content .para", {
        duration: 1, ease: "elastic", x: -1000, opacity: 0, 
    })
    tl.from("#home .content .form", {
        duration: 1, ease: "elastic", y: 10, opacity: 0, 
    })
    
}

timeline()


const carouselItem = document.querySelectorAll('.carousel-item')
let i = 0

function diraction() {
timeline() 
carouselItem.forEach(item => {
 if (item.classList.contains('active')) {
     item.classList.remove('active')
 }
})
}
function change(){
    clearInterval(int)
}
const int = setInterval(() => {
    diraction()
    i--
    if (i < 0) {
        i = carouselItem.length - 1
    }
    carouselItem[i].classList.add('active')
}, 5000)




var swiper = new Swiper('.swiper',{
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,    
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
        200: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }
    
  });

gsap.registerPlugin(ScrollTrigger)

ScrollTrigger.matchMedia({
    "(min-width:1300px)": function(){
        const about = gsap.timeline({
            scrollTrigger: {
                trigger: ".about .title",  
            },  
          })
          
          about.from(".about .title", {
              duration: 1, scale: 5,
          })
          
          const gallery = gsap.timeline({
              scrollTrigger: {
                  trigger: ".gallery .title",  
              },  
            })
            
            gallery.from(".gallery .title", {
                duration: 1, scale: 5,
            })
          
            const team = gsap.timeline({
              scrollTrigger: {
                  trigger: ".team .title",  
              },  
            })
            
            team.from(".team .title", {
                duration: 1, scale: 5,
            })
          
            const blog = gsap.timeline({
              scrollTrigger: {
                  trigger: ".blog .title",  
              },  
            })
            
            blog.from(".blog .title", {
                duration: 1, scale: 5,
            })
          
    }
})











