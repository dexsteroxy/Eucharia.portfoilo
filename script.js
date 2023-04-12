// window.alert('please do not close this page is Loading it will take some seconds for it to open')

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.nav');

console.log(navLinks, "navLinks");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        console.log("id =>", id);

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                console.log(links, "-links")
                links.classList.remove('text-black');

                document.querySelector(`.${id}`).classList.add('text-bro')

                // document.querySelector('.header a [href*=' + id + ']').classList.add('text-maincolor')
            });
        };
    });
};



/*scroll reveal*/

ScrollReveal({
     reset: true,
     distance: '80px',
     duration: 2000,
     delay: 200
     });


     ScrollReveal().reveal('.tochit', { origin: 'top'});

     ScrollReveal().reveal('.tochib ', { origin: 'bottom'});

     ScrollReveal().reveal('.tochil', { origin: 'left'});

     ScrollReveal().reveal('.tochir ', { origin: 'right'});





// hambugar-menu






 



  
  const btn = document.getElementById('menu-btn');
  const nav = document.getElementById('menu')


  btn.addEventListener('click', () => {
    btn.classList.toggle('open')

    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
  });



//for dark and white mood
//icons

const sunIcon = document.querySelector('.sun');
const moonIcon = document.querySelector('.moon');

//theme variable
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

//icon toggling
const iconToggle = () => {
    moonIcon.classList.toggle("display-none");
    sunIcon.classList.toggle("display-none");
};

//initial theme check
const themeCheck = () => {
if (userTheme === "dark" || (!userTheme && systemTheme)) {
    document.documentElement.classList.add("dark");
    moonIcon.classList.add("display-none");
    return;
}
sunIcon.classList.add("display-none")
};

//manual theme switch

const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        iconToggle();
        return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    iconToggle();
};

//call theme switch on clicking bttuns

sunIcon.addEventListener("click", () => {
    themeSwitch();
});

moonIcon.addEventListener("click", () => {
    themeSwitch();
});

//invoke theme check on initial load

themeCheck();