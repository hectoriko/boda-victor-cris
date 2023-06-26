<?php

$invitado = $_POST['invitado'];
$acompanante = $_POST['acompanante'];
$acompananteString = "";
$viernes = $_POST['viernes'];
$sabado = $_POST['sabado'];

$subject = "Invitado" . $invitado . "acompanante" . $acompanante . "viernes" . $viernes . "sabado" . $sabado;

if (isset($viernes)) {
  $viernes = ", Viernes";
} else {
  $viernes = "";
}

if (isset($sabado)) {
  $sabado = ", Sábado";
} else {
  $viernes = "";
}

if (isset($sabado)) {
  $acompananteString = " acompañado de " . $acompanante;
} else {
  $acompananteString = "";
}


$msg = "Hola, soy " . $invitado . " y asistiré " . $viernes . $sabado . $acompanante;

$recipient = "Noacrisvic@gmail.com";

$mailheader = "From:" . $invitado . "<" . $recipient . ">\r\n";

mail("Noacrisvic@gmail.com", $subject, $msg, $mailheader) or die("Error!");

echo "email sent!"

?>
