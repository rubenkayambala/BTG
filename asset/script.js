// Menu burger
document.getElementById('burger-menu').addEventListener('click', function() {
    document.getElementById('nav-links').classList.toggle('active');
});

//Navbar
window.addEventListener('scroll', function() {
const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
    navbar.classList.add('shrink');
    } else {
    navbar.classList.remove('shrink');
    }
});

// Barre de recherche cachée Navbar
document.addEventListener('DOMContentLoaded', () => {
    const Btnsearch = document.getElementById('Btnsearch');
    const inputsearch = document.getElementById('search');

    if(Btnsearch) {
        Btnsearch.addEventListener('click', () => {
            if(inputsearch) {
                inputsearch.classList.toggle('cache');
                inputsearch.classList.toggle('visibel');
            }
        });
    }
});

// Barre de recherche cachée banner
document.addEventListener('DOMContentLoaded', () => {
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');

    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
        if (searchInput) {
            searchInput.classList.toggle('hidden');
            searchInput.classList.toggle('visible');
            }
        });
    }
});

//Le volet gauche du blog
function toggleDiv() {
    const content = document.querySelector('.voletgauche');
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
}

//Formulaires de contact
document.addEventListener('DOMContentLoaded', () => {
    const btnJoin = document.getElementById('btnJoin');
    const process = document.getElementById('process');
    const personnelBtn = document.getElementById('personnelBtn');
    const entrepriseBtn = document.getElementById('entrepriseBtn');
    const personnelForm = document.getElementById('personnelForm');
    const entrepriseForm = document.getElementById('entrepriseForm');
    const formclose1 = document.getElementById('personnalformclose');
    const formclose2 = document.getElementById('entrepriseformclose');

    if (btnJoin) {
        btnJoin.addEventListener('click', () => {
            if (process) {
                process.style.display = 'block';
            }
        });
    }

    personnelBtn.addEventListener('click', () => {
        personnelForm.style.display = 'flex';
        process.style.display = 'none';
    });
    formclose1.addEventListener('click', () => {
        personnelForm.style.display = 'none';
    });

    entrepriseBtn.addEventListener('click', () => {
        entrepriseForm.style.display = 'flex';
        process.style.display = 'none';
    });
    formclose2.addEventListener('click', () => {
        entrepriseForm.style.display = 'none';
    });
});

// Formulaire de publication des articles dans le blog pour les utilisateurs
document.addEventListener('DOMContentLoaded', () => {
    const formblog = document.getElementById('formblog');
    const formblogbtn = document.getElementById('formblogbtn');
    const closeformblog = document.getElementById('closeformblog');

    if (formblogbtn) {
        formblogbtn.addEventListener('click', () => {
            if (formblog) {
                formblog.style.display = 'block';
            }
        });
    }

    closeformblog.addEventListener('click', () => {
        formblog.style.display = 'none';
    })
});
