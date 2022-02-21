// CONFIGURATION DU BOUTON RETOUR HAUT DE PAGE
    //Recherche du bouton
    var mybutton = document.getElementById("myBtn");

    //Lorsque l'utilisateur descend de 20px depuis le haut du document, afficher le bouton
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
    }

    //Lorsque l'utilisateur clique sur le bouton, il fait défiler le document vers le haut
    function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    }