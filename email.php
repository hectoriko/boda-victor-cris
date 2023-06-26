<?php

$invitado = $_POST['invitado'] ?? '';
$acompanante = $_POST['acompanante'] ?? '';
$viernes = isset($_POST['viernes']);
$sabado = isset($_POST['sabado']);

$viernesString = $viernes ? ", Viernes" : "";
$sabadoString = $sabado ? ", Sábado" : "";

$subject = "Invitado: $invitado, Acompañante: $acompanante, Días: $viernesString $sabadoString";

$acompananteString = $acompanante ? " acompañado de $acompanante" : "";

$msg = "Hola, soy $invitado y asistiré $viernesString $sabadoString $acompananteString";

$recipient = "no-reply@bodacrisvic.es";

$mailheader = "From: $invitado <$recipient>\r\n";

$mailSent = mail("Noacrisvic@gmail.com", $subject, $msg, $mailheader);

if ($mailSent) {
  // echo "¡Correo enviado!";
  // echo "¡Muchas gracias por confirmar!";
  echo 1;
} else {
  // echo "¡Error al enviar el correo!";
  echo 0;
}
?>
