<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Arc-en-ciel</title>
    <script src="https://code.jquery.com/jquery-3.7.0.min.js"></script>
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css">
    <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.min.js"></script>
    <style>
        #rainbow {
            display: flex;
            gap: 10px;
            margin-bottom: 20px;
        }

        #rainbow img {
            width: 100px;
            cursor: grab;
        }

        #message {
            font-weight: bold;
            margin-top: 20px;
        }
    </style>
</head>

<body>

    <button id="shuffleBtn">Mélanger</button>
    <div id="rainbow">
        <img src="arc1.png" data-order="1">
        <img src="arc2.png" data-order="2">
        <img src="arc3.png" data-order="3">
        <img src="arc4.png" data-order="4">
        <img src="arc5.png" data-order="5">
        <img src="arc6.png" data-order="6">
    </div>
    <div id="message"></div>

    <script src="script.js"></script>
</body>

</html>