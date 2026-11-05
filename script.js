// Récupérer toutes les cartes produits
let cards = document.querySelectorAll(".card");
let totalElement = document.querySelector(".total");

// Calculer et afficher le prix total
function updateTotal() {
  let total = 0;
  let cartes = document.querySelectorAll(".card");

  for (let card of cartes) {
    let prix = parseFloat(card.querySelector(".unit-price").textContent);
    let quantite = parseInt(card.querySelector(".quantity").textContent);
    total += prix * quantite;
  }

  totalElement.textContent = total + " $";
}

// Ajouter les événements sur chaque carte
for (let card of cards) {
  let btnPlus = card.querySelector(".fa-plus-circle");
  let btnMoins = card.querySelector(".fa-minus-circle");
  let btnSupprimer = card.querySelector(".fa-trash-alt");
  let btnCoeur = card.querySelector(".fa-heart");
  let quantite = card.querySelector(".quantity");

  // 1. Bouton + : augmenter la quantité
  btnPlus.addEventListener("click", function () {
    quantite.textContent = parseInt(quantite.textContent) + 1;
    updateTotal();
  });

  // 1. Bouton - : diminuer la quantité (jamais en dessous de 0)
  btnMoins.addEventListener("click", function () {
    if (parseInt(quantite.textContent) > 0) {
      quantite.textContent = parseInt(quantite.textContent) - 1;
      updateTotal();
    }
  });

  // 2. Supprimer l'article du panier
  btnSupprimer.addEventListener("click", function () {
    card.remove();
    updateTotal();
  });

  // 3. Aimer l'article : le cœur change de couleur
  btnCoeur.addEventListener("click", function () {
    btnCoeur.classList.toggle("liked");
  });
}
