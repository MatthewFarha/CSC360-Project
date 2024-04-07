<?php
    require('templates/redirectifninfo.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <script src="game.js"></script> 
    <title>Memory Game</title>
</head>
<body>
    <?php
        include "templates/banner.php";
    ?>
    <div id="settings-display">
        <p id="usernamet">Name: </p>
        <p id="username"><?= $_SESSION['username'] ?></p>
        <p id="numberofbuttonst">Buttons: </p>
        <p id="numberofbuttons"><?= $_SESSION['numberofbuttons'] ?></p>
        <p id="numberofmovest">Max Moves: </p>
        <p id="numberofmoves"><?= $_SESSION['numberofmoves'] ?></p>
        <p>Round: </p>
        <p id="round"></p>
    </div>
    <div id="memoryButtons">
        <?php
            for($i=0; $i<$_SESSION['numberofbuttons']; $i++){?>
        <button class="gameButton" type="button" onclick="playerMove(<?=$i?>)"> </button>
        <?php
            }
        ?>
    </div>
    <div id="fakeMemoryButtons">
        <?php
            for($i=0; $i<$_SESSION['numberofbuttons']; $i++){?>
        <button class="fakeButton" type="button"> </button>
        <?php
            }
        ?>
    </div>
    <!-- TO DO: Blind Options
        <div id="blind-mode-menu">
        <button id="normal-color" onclick="setColor(0)">Normal</button>
        <button id="deuteranopia-color" onclick="setColor(1)">Deuteranopia </button>
        <button id="protanopia-color" onclick="setColor(2)">Protanopia</button>
    </div>
        -->
    <div id="menuButtons">
        <a id="reset-button" href="reset.php">Reset Game</a>
        <p id="blind-mode-button" onclick="blindModeMenu()">Color Blind Mode</p>
    </div>
    <?php
        include "templates/footer.php";
    ?>
</body>
</html>