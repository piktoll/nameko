<?php
class Application
{
    public $title;
    public $desc;

    function __construct($title, $desc)
    {
        $this->title = $title;
        $this->desc = $desc;
    }

    function printTitle()
    {
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
    <header>
        <h1 id="logo">name<span class="red">k</span><span class="blue">o</span></h1>
        <h2 id="heading-el"></h2>
        <h3>Click on the button below and create your very own Korean name!</h3>
    </header>
    <main>
        <div class="familyname-selector"><input type="checkbox" name="family-el" id="family-el"><label for="family-el">Also generate Family Name</label></div>
        <button id="generate-btn" class="primary-btn">Generate!</button>
        <div id="echobox">
            <div id="name-el"></div>
            <div id="romaja-el" class="romaja"></div>
        </div>
        <div id="list-el"></div>
        <button id="mass-generate-btn" class="secondary-btn">Mass Generate</button>
        <button id="clear-list-btn" class="tertiary-btn">Clear List</button>
    </main>
    <footer>
        <p><?php echo $app->printTitle(); ?></p>
        <p>CC-BY-SA&nbsp;3.0 Karhut Group.</p>
    </footer>
</body>
</html>
