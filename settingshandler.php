<?php
    require('templates/redirectifninfo.php');
//--------------------------------------------------------------- Variables
    $username = $_POST['username'];
    $buttons = intval($_POST['numberofbuttons']);
    $moves = intval($_POST['numberofmoves']);
//--------------------------------------------------------------- Check Username
    if(strcmp("", $username)==0){
        $_SESSION['username'] = "Anonymous";
    }
    else{
        $_SESSION['username'] = $username;
    }
//--------------------------------------------------------------- Check Buttons
    if($buttons>=4&&$buttons<=8){
        $_SESSION['numberofbuttons'] = $buttons;
    }
    else{
        $_SESSION['numberofbuttons'] = 4;
    }
//--------------------------------------------------------------- Check Moves
    if($moves>=5&&$moves<=30){
        $_SESSION['numberofmoves'] = $moves;
    }
    else{
        $_SESSION['numberofmoves'] = 5;
    }
//--------------------------------------------------------------- Leaderboard
    $_SESSION['leaderboard'] = Array(10);
//--------------------------------------------------------------- Redirect
    header('location: game.php');
?>