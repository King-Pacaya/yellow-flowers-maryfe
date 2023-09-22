onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

let slideIndex = 1; // Inicializa en 1 para mostrar el primer slide
showSlides(slideIndex);

function showSlides(n) {
    let slides = document.querySelectorAll(".slide");
    
    if (n > slides.length) {
        slideIndex = 1; // Vuelve al primer slide si llegamos al final
    }
    if (n < 1) {
        slideIndex = slides.length; // Va al último slide si estamos en el primer slide y retrocedemos
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "flex";
    slides[slideIndex - 1].classList.add("slide-up");

    setTimeout(function () {
        slides[slideIndex - 1].classList.remove("slide-up");
    }, 500);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}
