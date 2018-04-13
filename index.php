<?php

$sourceimg = "https://www.arpae.it/sim/datiiningresso/Immagini/adriaroms/ROMSTMP_N000_01.png";
$localdest= "./temp-mari.png";
$aday = 24*3600;

if(filemtime($localdest)  + $aday < time()) {
    copy($sourceimg,$localdest);
    header("Retrieved-from-there: $sourceimg");
}

include "index.html";