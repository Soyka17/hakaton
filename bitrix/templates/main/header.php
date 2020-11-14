<?
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true)
    die();
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <? $APPLICATION->ShowHead(); ?>
    <title><? $APPLICATION->ShowTitle(); ?></title>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400&display=swap" rel="stylesheet">
    <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
    <link rel="stylesheet" type="text/css" href="/bitrix/templates/main/css/custom.css">
    <script src="/bitrix/js/main/jquery/jquery-1.8.3.js" type="text/javascript"></script>
    <script src="/bitrix/templates/main/js/main.js"></script>
</head>
<body>
<div id="panel">
    <? $APPLICATION->ShowPanel(); ?>
</div>
<div class="maxwidth_header">
    <header class="header js-header">
        <a href="#" class="header-close js-menu-toggler">
            <div class="header-close-line"></div>
            <div class="header-close-line"></div>
        </a>
        <div class="menu" id="navigation">
            <? $APPLICATION->IncludeComponent(
                "bitrix:menu",
                "",
                array(
                    "ROOT_MENU_TYPE" => "top",
                    "MAX_LEVEL" => "3",
                    "CHILD_MENU_TYPE" => "left",
                    "USE_EXT" => "Y"
                )
            ); ?>
        </div>
    </header>
    <a href="#" class="burger js-menu-toggler js-burger">
        <div class="burger-line"></div>
        <div class="burger-line"></div>
        <div class="burger-line"></div>
    </a>
</div>