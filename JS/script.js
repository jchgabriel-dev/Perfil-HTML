function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop - 80,
            behavior: 'smooth'
        });
    }
}


const botones = document.querySelectorAll('.buttoIcon');
botones.forEach(boton => {
    boton.addEventListener('click', function() {
        const enlace = this.getAttribute('data-enlace');

        window.open(enlace, '_blank');
    });
});


const corners = document.querySelectorAll('.btn-corner');
corners.forEach(boton => {
    boton.addEventListener('click', function() {
        const enlace = this.getAttribute('data-enlace');

        window.open(enlace, '_blank');
    });
});