<?php

// $invitado = $_POST['invitado'];
// $acompanante = $_POST['acompanante'];
// $acompananteString = "";
// $viernes = $_POST['viernes'];
// $sabado = $_POST['sabado'];

// $subject = "Invitado" . $invitado . "acompañante" . $acompanante . "viernes" . $viernes . "sabado" . $sabado;

// if (isset($viernes)) {
//   $viernes = ", Viernes";
// } else {
//   $viernes = "";
// }

// if (isset($sabado)) {
//   $sabado = ", Sábado";
// } else {
//   $viernes = "";
// }

// if (isset($acompanante)) {
//   $acompananteString = " acompañado de " . $acompanante;
// } else {
//   $acompananteString = "";
// }


// $msg = "Hola, soy " . $invitado . " y asistiré " . $viernes . $sxabado . $acompanante;

// $recipient = "Noacrisvic@gmail.com";

// $mailheader = "From:" . $invitado . "<" . $recipient . ">\r\n";

// mail("Noacrisvic@gmail.com", $subject, $msg, $mailheader) or die("Error!");

// echo "email sent!"


$invitado = $_POST['invitado'] ?? '';
$acompanante = $_POST['acompanante'] ?? '';
$viernes = isset($_POST['viernes']);
$sabado = isset($_POST['sabado']);

$subject = "Invitado: $invitado, Acompañante: $acompanante, Viernes: $viernes, Sábado: $sabado";

$viernesString = $viernes ? ", Viernes" : "";
$sabadoString = $sabado ? ", Sábado" : "";

$acompananteString = $acompanante ? " acompañado de $acompanante" : "";

$msg = "Hola, soy $invitado y asistiré $viernesString $sabadoString $acompananteString";

$recipient = "Noacrisvic@gmail.com";

$mailheader = "From: $invitado <$recipient>\r\n";

$mailSent = mail("Noacrisvic@gmail.com", $subject, $msg, $mailheader);

if ($mailSent) {
  echo "¡Correo enviado!";
} else {
  echo "¡Error al enviar el correo!";
}
?>
