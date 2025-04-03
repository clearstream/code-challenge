<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="h-full bg-gray-100">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">

        <title>Clearstream Code Challenge</title>

        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />

        @vite('resources/css/app.css')
        @vite('resources/js/app.js')
    </head>
    <body class="h-full">
        <div id="app"></div>
    </body>
</html>
