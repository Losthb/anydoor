<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>{{title}}</title>
  <style>
    body{
      margin: 20px;
    }

    a {
      display: block;
      font-size:15px;
    }
  </style>
</head>
<body>
{{#each files}}
  <a href="{{../dir}}/{{this}}">{{this}}</a>
{{/each}}
</body>
</html>
