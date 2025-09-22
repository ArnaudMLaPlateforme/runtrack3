$(document).ready(function () {
    function shuffleArray(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    // Rendre les images déplaçables dès le départ
    $("#rainbow").sortable({
        axis: "x",           // Déplacement horizontal uniquement
        tolerance: "pointer", // Détection basée sur la position du curseur
        update: checkOrder
    });

    $("#shuffleBtn").click(function () {
        let images = $("#rainbow img").detach().toArray(); // detach garde les événements
        images = shuffleArray(images);
        $("#rainbow").append(images);
        $("#message").text("");
        $("#rainbow").sortable("refresh"); // réinitialise sortable après mélange
    });

    function checkOrder() {
        let correct = true;
        $("#rainbow img").each(function (index) {
            if (parseInt($(this).data("order")) !== index + 1) {
                correct = false;
            }
        });

        if (correct) {
            $("#message").text("Vous avez gagné").css("color", "green");
        } else {
            $("#message").text("Vous avez perdu").css("color", "red");
        }
    }
});
