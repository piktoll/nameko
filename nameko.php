<?php
class Application {
    public $title;
    public $desc;

    function __construct($title, $desc) {
        $this->title = $title;
        $this->desc = $desc;
    }

    function printTitle() {
        return "{$this->title} &ndash; {$this->desc}";
    }
}

$app = new Application('nameko', 'Korean Name Generator');
?>

<!DOCTYPE html>
<html lang="ko">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title><?php echo $app->printTitle(); ?></title>
        <link rel="stylesheet" type="text/css" href="./assets/css/main.css">
        <script type="text/javascript" src="./assets/js/nameko.js"></script>
    </head>
    <body>
        <h1>name<span class="red">k</span><span class="blue">o</span></h1>
        <h2 id="heading"></h2>
        <h3>Click on the button below and create your very own Korean name!</h3>
        <div class="familyname-selector"><input type="checkbox" name="family" id="family"><label for="family">Generate Family Name also</label></div>
        <button id="generate-btn" class="primary-btn">Generate!</button>
        <div id="echobox">
            <div id="echoname"></div>
            <div id="echoromaja" class="romaja"></div>
        </div>
        <div id="list"></div>
        <button id="mass-generate" class="primary-btn">Mass Generate</button>
        <button class="secondary-btn" onclick="clearList();">Clear List</button>
        <footer>
            <p><?php echo $app->printTitle(); ?></p>
            <p>&copy;&nbsp;2022 Karhut Group. All Rights Reserved.</p>
        </footer>
    </body>
</html>
