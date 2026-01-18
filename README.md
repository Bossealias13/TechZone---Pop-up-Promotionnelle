# TechZone - Pop-up Promotionnelle ⚡


![Aperçu](./screenshot.png)
[voir le site]()

Ce projet est un exercice pratique visant à maîtriser la création d'une fenêtre modale (pop-up) interactive sans framework, en utilisant uniquement du **JavaScript Vanilla moderne**.

Le contexte est une landing page pour "TechZone", un site e-commerce fictif, proposant une réduction via une inscription par email.


## 🛠️ Stack Technique

* **HTML5** : Structure sémantique 
* **CSS3** 
* **JavaScript** : Code structuré en ES6+
* **Bonnes Pratiques CSS** : Usage de `aspect-ratio` pour éviter le *Layout Shift* et de classes utilitaires pour l'accessibilité (`.sr-only`).


## 🚀 Fonctionnalités

1.  **Ouverture automatique** : (Simulée par le chargement de la page pour l'exercice).
2.  **Validation d'Email** :
    * Si invalide : Message d'erreur rouge.
    * Si valide : Message de succès vert, désactivation du bouton pour éviter les doubles clics.
3.  **Fermeture intelligente** :
    * Au clic sur la croix `X`.
    * Au clic sur la zone sombre (overlay).
    * Automatique 3.5 secondes après une inscription réussie.


