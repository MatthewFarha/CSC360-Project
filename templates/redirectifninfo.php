<?php
    session_start();
    if(!(isset($_SESSION['username'])&&isset($_SESSION['numberofbuttons'])&&isset($_SESSION['numberofmoves'])))
        header('location: index.php');
?>