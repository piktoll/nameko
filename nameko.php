<?php
$title = 'nameko &ndash; Korean Name Generator';
?>

<!DOCTYPE html>
<html lang="ko">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title><?php echo $title; ?></title>
        <link rel="stylesheet" type="text/css" href="./assets/css/main.css">
    </head>

    <body>
        <h1>name<span class="red">k</span><span class="blue">o</span></h1>
        <h2 id="heading"></h2>
        <h3>Click on the button below and create your very own Korean name!</h3>
        <input type="checkbox" name="family" id="family"><label for="family">Generate Family Name also</label>
        <button class="primary-btn" onclick="generateName();">Generate!</button>
        <div id="echobox">
            <div id="echoname"></div>
            <div id="echoromaja" class="romaja"></div>
        </div>
        <div id="list"></div>
        <button class="primary-btn" onclick="massGenerate(10);">Mass Generate</button>
        <button class="secondary-btn" onclick="clearList();">Clear List</button>
        <footer>
            <p><?php echo $title; ?> &copy;&nbsp;2022 Karhut Group. All Rights Reserved.</p>
        </footer>
    
    <script type="text/javascript" src="./assets/js/nameko.js"></script>
    </body>
</html>
