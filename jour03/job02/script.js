// Dans cet exercice, 6 images s’assemblent pour former un arc-en-ciel, il vous faudra les
// mélanger puis les remettre en ordre.

// Lorsque le DOM est complètement chargé
$(document).ready(function () {

    // Fonction pour mélanger aléatoirement un tableau
    function shuffleArray(array) {
        // La fonction sort() avec Math.random() - 0.5 renvoie un ordre aléatoire
        return array.sort(() => Math.random() - 0.5);
    }

    // Rendre les images à l'intérieur de #rainbow déplaçables via jQuery UI sortable
    $("#rainbow").sortable({
        axis: "x",            // Limite le déplacement uniquement à l'axe horizontal
        tolerance: "pointer", // La détection de la position se fait par rapport au curseur
        update: checkOrder    // Appelle la fonction checkOrder lorsque l'ordre change
    });

    // Événement au clic sur le bouton #shuffleBtn
    $("#shuffleBtn").click(function () {
        // Récupère toutes les images de #rainbow et les détache du DOM
        // detach() conserve les événements associés aux éléments
        let images = $("#rainbow img").detach().toArray();

        // Mélange aléatoirement les images
        images = shuffleArray(images);

        // Réinsère les images mélangées dans #rainbow
        $("#rainbow").append(images);

        // Efface le message de victoire/défaite
        $("#message").text("");

        // Actualise sortable après avoir réorganisé les éléments
        $("#rainbow").sortable("refresh");
    });

    // Fonction pour vérifier si l'ordre des images est correct
    function checkOrder() {
        let correct = true;

        // Parcours toutes les images et compare leur data-order avec leur position
        $("#rainbow img").each(function (index) {
            if (parseInt($(this).data("order")) !== index + 1) {
                correct = false;
            }
        });

        // Affiche le message selon que l'ordre soit correct ou non
        if (correct) {
            $("#message").text("Vous avez gagné").css("color", "green");
        } else {
            $("#message").text("Vous avez perdu").css("color", "red");
        }
    }
});
