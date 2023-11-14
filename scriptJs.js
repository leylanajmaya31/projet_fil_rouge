let indexDiapo = 0;

function afficherDiapositives() {
    let diapositives = document.getElementsByClassName("maDiapo");

    for (let i = 0; i < diapositives.length; i++) {
        diapositives[i].style.display = "none";
    }

    indexDiapo++;

    if (indexDiapo > diapositives.length) {
        indexDiapo = 1;
    }

    diapositives[indexDiapo - 1].style.display = "block";

    setTimeout(afficherDiapositives, 2000); 
}
afficherDiapositives();

// ********************test medias queries*********************************

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.querySelector('nav ul');

    // apparition du menu lors du clic sur le bouton toggle
    menuToggle.addEventListener('click', function () {
        nav.style.display = (nav.style.display === 'none' || nav.style.display === '') ? 'flex' : 'none';
    });

    // Masquer le menu si on clique sur un lien 
    nav.addEventListener('click', function () {
        nav.style.display = 'none';
    });

    // Masquer le menu lorsque si on redimensionne la fenêtre
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            nav.style.display = 'flex';
        } else {
            nav.style.display = 'none';
        }
    });
});
