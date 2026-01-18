"use strict";

/* --- 1. SÉLECTION ET CONFIGURATION --- */
// On prépare tous les outils ici.
const overlay = document.querySelector("#modal-overlay");
const boutonFermeture = document.querySelector("#close-modal");
const formulaire = document.querySelector("#signup-form");
const inputEmail = document.querySelector("#email");
const btnSubmit = document.querySelector(".btn-discount"); // J'ai ajouté ça
const messageValidation = document.querySelector(".message-validation");

// Le Regex est une constante, on le met au début.
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

/* --- 2. FONCTIONS (La logique) --- */
// Astuce : Créer une fonction pour fermer permet de la réutiliser
const fermerModale = function() {
    overlay.classList.add("hidden");
    // On nettoie le formulaire quand on ferme (optionnel mais propre)
    messageValidation.textContent = "";
    inputEmail.value = "";
};

/* --- 3. ÉVÉNEMENTS --- */

// A. Gestion du formulaire
formulaire.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = inputEmail.value;

  if (emailRegex.test(email)) {
    // --- SUCCÈS ---
    messageValidation.textContent = "Félicitations ! Code envoyé par email.";
    messageValidation.style.color = "#198754"; // Vert CSS
    
    // UX : On change le texte du bouton et on le désactive pour éviter le double-click
    btnSubmit.textContent = "Envoyé !";
    btnSubmit.disabled = true; 
    btnSubmit.style.opacity = "0.7";

    // Minuteur
    setTimeout(() => {
      fermerModale();
      
      // Reset du bouton pour la prochaine fois
      btnSubmit.textContent = "S'inscrire";
      btnSubmit.disabled = false;
      btnSubmit.style.opacity = "1";
    }, 3500);

  } else {
    // --- ERREUR ---
    messageValidation.textContent = "Veuillez entrer une adresse email valide.";
    messageValidation.style.color = "#dc3545"; // Rouge standard
  }
}); // Pas de virgule ici !

// B. Gestion de la fermeture (Croix)
boutonFermeture.addEventListener("click", fermerModale);

// BONUS LEAD DEV : Fermer si on clique sur le fond noir (overlay) ?
// C'est souvent attendu par les utilisateurs.
overlay.addEventListener("click", function(event) {
    if (event.target === overlay) {
        fermerModale();
    }
});