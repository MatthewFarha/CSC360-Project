<?php
    session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Home</title>
</head>
<body>
    <?php
        include "templates/banner.php";
    ?>
    <div id="settings-container">
        <div id="settings-top">
            <h2>Settings</h2>
        </div>
        <div id="settings-body">
            <form action="settingshandler.php" method="post">
                <input type="text" placeholder="Username" name="username" size ="24"> <br>
                <input type="text" placeholder="How many buttons? (4-8)" name="numberofbuttons" size ="24"> <br>
                <input type="text" placeholder="How many moves? (5-30)" name="numberofmoves" size ="24"> <br>
                <input type="submit" value="Play" id="settings-submit"> <br>
            </form>
        </div>
    </div>
    <?php
        include "templates/footer.php";
    ?>
</body>
</html>