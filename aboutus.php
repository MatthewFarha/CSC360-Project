<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>About Us</title>
</head>
<body>    
    <?php
        include "templates/banner.php";
    ?>
    <div id="help-container">
        <div id="help-info">
            <h2>About Us</h2>
            <p>The Memory Game demo was designed by a small team from Quincy University as part of a semester-long project
                for CSC-360 Software Engineering. The goal was to design an application that would assist with the testing
                and improvement of congitive functions associated with memory. The target population for this application is
                the elderly, who are especially vulnerable to cognitive decline. The team consisted of Kobe Essien, Matthew Farha, 
                Drew Kroeger, and Owen Manley. 
            </p>
        </div>
        <div id="help-faq">
            <h2>The Team</h2>
            <img src="imgs/A_Team.jpg">
        </div>
    </div>
    <?php
        include "templates/footer.php";
    ?>
</body>
</html>