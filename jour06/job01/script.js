/* 
** Bouton Reboot
*/
const rebootBtn = document.querySelector('.btn-danger');
const jumbotronText = document.getElementById('jumbotron-text');

const citations = [
    "J'ai vu des choses que vous, les humains, ne pourriez pas croire.",
    "Tous ces moments se perdront dans le temps, comme des larmes dans la pluie.",
    "Plus humain que l'humain est notre devise.",
    "La lumière qui brille deux fois plus fort brûle deux fois moins longtemps.",
    "Les réplicants sont comme toute autre machine. Ils sont soit un bienfait, soit un danger."
];

rebootBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * citations.length);
    jumbotronText.textContent = citations[randomIndex]; 
});

/* 
** Pagination
*/
const pageContents = [
    "<p>Contenu pour la page 1 : Bienvenue dans le monde merveilleux !</p>",
    "<p>Contenu pour la page 2 : Ici on explore de nouvelles possibilités.</p>",
    "<p>Contenu pour la page 3 : Dernière page, fin du voyage.</p>"
];

let currentPage = 0;

const paginationLinks = document.querySelectorAll('#jumbotron-pagination a.page-link:not([aria-label])');
const prevBtn = document.getElementById('prev-page');
const nextBtn = document.getElementById('next-page');

function updateJumbotron(index) {
    if (index < 0) index = 0;
    if (index >= pageContents.length) index = pageContents.length - 1;
    currentPage = index;
    jumbotronText.innerHTML = pageContents[currentPage];
}

// Pagination numérique
paginationLinks.forEach((link, idx) => {
    link.addEventListener('click', e => {
        e.preventDefault();
        updateJumbotron(idx);
    });
});

// Flèche Previous
prevBtn.addEventListener('click', e => {
    e.preventDefault();
    updateJumbotron(currentPage - 1);
});

// Flèche Next
nextBtn.addEventListener('click', e => {
    e.preventDefault();
    updateJumbotron(currentPage + 1);
});


/* 
** Rendre actif éléments de la liste groupée
*/
const listItems = document.querySelectorAll('.list-group-item');

listItems.forEach(item => {
  item.addEventListener('click', () => {
    // Retire la classe 'active' de tous les éléments
    listItems.forEach(el => el.classList.remove('active'));
    // Ajoute la classe 'active' à l'élément cliqué
    item.classList.add('active');
  });
});


/* 
** Rendre actif les boutons de la barre de progression
*/
const progressBar = document.getElementById('progress-bar');
const increaseBtn = document.getElementById('increase-btn');
const decreaseBtn = document.getElementById('decrease-btn');

increaseBtn.addEventListener('click', () => {
  let currentValue = parseInt(progressBar.style.width);
  if (currentValue < 100) {
    currentValue += 10;
    progressBar.style.width = currentValue + '%';
  }
});

decreaseBtn.addEventListener('click', () => {
  let currentValue = parseInt(progressBar.style.width);
  if (currentValue > 0) {
    currentValue -= 10;
    progressBar.style.width = currentValue + '%';
  }
});


/* 
** Validation du formulaire
*/
const submitBtn = document.querySelector('.col-md-4 .btn-primary');
const emailInput = document.getElementById('exampleFormControlInput1');
const passwordInput = document.getElementById('password');
const jumbotron = document.querySelector('.jumbotron');

function getRandomColor() {
  // Retourne une couleur aléatoire en hex
  return '#' + Math.floor(Math.random()*16777215).toString(16);
}

submitBtn.addEventListener('click', (e) => {
  e.preventDefault(); // Empêche l'envoi du formulaire

  if(emailInput.value.trim() !== '' && passwordInput.value.trim() !== '') {
    // Change la couleur du jumbotron aléatoirement
    jumbotron.style.backgroundColor = getRandomColor();

    // Scroll vers le jumbotron avec animation
    jumbotron.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Optionnel : on peut mettre un petit effet pour attirer l'attention
    jumbotron.style.transition = 'box-shadow 0.5s';
    jumbotron.style.boxShadow = '0 0 20px 5px rgba(255, 255, 0, 0.7)';
    setTimeout(() => {
      jumbotron.style.boxShadow = '';
    }, 1000);

  } else {
    alert("Merci de remplir l'email et le mot de passe !");
  }
});

