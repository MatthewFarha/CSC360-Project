<?php
    // TO DO: Leaderboard
    require('templates/redirectifninfo.php');
/*    if(isset($_SESSION["score"])){
        for($i=0; i<10; i++){
            if(isset($_SESSION["leaderboard"][$i])){
                if($_SESSION["leaderboard"][$i]["score"]<$_SESSION["score"]){
                    $_SESSION["leaderboard"][$i]["score"] = $_SESSION["score"];
                    $_SESSION["leaderboard"][$i]["lose"] = $_SESSION["lose"];
                }
            }
            else{
                $_SESSION["leaderboard"][$i]["score"] = $_SESSION["score"];
                $_SESSION["leaderboard"][$i]["lose"] = $_SESSION["lost"];
                break;
            }
        }
       unset($_SESSION["score"]);
       unset($_SESSION["lose"]);
    }*/
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
    <?php
        include "templates/footer.php";
    ?>
</body>
</html>