<?php
echo '<meta name="viewport" content="width=device-width, initial-scale=1.0">';

echo;

function getHeader($page){
$header =
  '
<nav class="navbar">
      <div><a href="/">Home</a></div>
      <div><a href="./illustration/">Illustration</a></div>
      <div><a href="./graphic design/">Graphic Design</a></div>
      <div><a href="./games/">Games</a></div>
      <div><a href="./comics-and-zines/">Comics and Zines</a></div>
      <div><a href="./about/">About</a></div>
    </nav>
  ';


  echo $header;
?>