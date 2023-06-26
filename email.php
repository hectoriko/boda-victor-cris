<?php

$invitado = $_POST['invitado'] ?? '';
$acompanante = $_POST['acompanante'] ?? '';
// $viernes = isset($_POST['viernes']) && $_POST['viernes'] === true;
// $sabado = isset($_POST['sabado']) && $_POST['sabado'] === true;
$viernes = $_POST['viernes'] ?? '';
$sabado = $_POST['sabado'] ?? '';

$viernesString = $viernes ? ", Viernes" : "";
$sabadoString = $sabado ? ", Sábado" : "";

$subject = "Invitado: $invitado, Acompañante: $acompanante, Días: $viernesString $sabadoString";

$acompananteString = $acompanante ? " acompañado de $acompanante" : "";

$msg = "Hola, soy $invitado y asistiré $viernesString $sabadoString $acompananteString";

$recipient = "no-reply@bodacrisvic.es";

$mailheader = "From: $invitado <$recipient>\r\n";

$mailSent = mail("Noacrisvic@gmail.com", $subject, $msg, $mailheader);

?>
