function showcase(){
    let btn1 = document.getElementById("btn-1")
    let btn2 = document.getElementById("btn-2")
    let btn3 = document.getElementById("btn-3")
    let certificateCont = document.getElementById("certificate-cont")
    let techCont = document.getElementById("tech-stack")
    let projectCont = document.getElementById("project-cont")

    btn1.addEventListener("click", () => {
        techCont.style.display = "flex"
        certificateCont.style.display = "none"
        projectCont.style.display = "none"
    })
    btn2.addEventListener("click", () => {
        techCont.style.display = "none"
        certificateCont.style.display = "flex"
        projectCont.style.display = "none"
    })
    btn3.addEventListener("click", () => {
        techCont.style.display = "none"
        certificateCont.style.display = "none"
        projectCont.style.display = "flex"
    })
}
showcase()

function sidebarlinks() {
    document.addEventListener("DOMContentLoaded", () => {
    const sidebarLinks = document.querySelectorAll("#offcanvasSideBar .nav-link");
    const offcanvasEl = document.getElementById("offcanvasSideBar");
    const bsOffcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvasEl);

    sidebarLinks.forEach(link => {
        link.addEventListener("click", e => {
        e.preventDefault(); 

        const targetId = link.getAttribute("href");
        const target = document.querySelector(targetId);

        if (target) {
            bsOffcanvas.hide();
            setTimeout(() => {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 300);
        }
        });
    });
    });
}
sidebarlinks()

function scrolleffect() {
    const faders = document.querySelectorAll('.scroll-fade');
    const options = { threshold: 0.3 };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, options);

    faders.forEach(fader => observer.observe(fader));
}
scrolleffect();

function techbutton(){
    const buttons = document.querySelectorAll('.tech-btn');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});
}
techbutton()


lottie.loadAnimation({
    container: document.getElementById('lottie-container'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'animations/TEchnology.json' 
});
