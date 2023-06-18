document.querySelector('.mobile-toggle').addEventListener('click', () => {
    document.querySelector('.nav').classList.toggle('active');
    document.querySelector('.mobile-overlay').classList.toggle('active');
    document.querySelector('header').classList.toggle('active');
})

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    speed: 500,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        600: {
            slidesPerView: 3
        }
    }
})

const heroSection = document.querySelector('.hero');

heroSection.addEventListener('mousemove', (e) => {
    heroSection.querySelectorAll('.btn').forEach(btn => {
        const speed = btn.getAttribute('data-speed');
        const percent = 300;
        const x = (window.innerWidth - e.pageX * speed) / percent;
        const y = (window.innerHeight - e.pageY * speed) / percent;
        btn.style.transform = `translateX(${x}px) translateY(${y}px)`;
    })
})

const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
})

var toggleButton = document.getElementById("toggleButton");
var textContainer = document.getElementById("textContainer");

toggleButton.addEventListener("click", function() {
  if (textContainer.classList.contains("show")) {
    textContainer.classList.remove("show");
  } else {
    textContainer.classList.add("show");
  }
});


const btnUp = {
    el: document.querySelector('.btn-up'),
    show() {
      this.el.classList.remove('btn-up_hide');
    },
    hide() {
      this.el.classList.add('btn-up_hide');
    },
    addEventListener() {
      window.addEventListener('scroll', () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        scrollY > 3700 ? this.show() : this.hide();
      });
      document.querySelector('.btn-up').onclick = () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }
  
  btnUp.addEventListener();