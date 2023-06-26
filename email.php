<?php

$invitado = $_POST['invitado'] ?? '';
$acompanante = $_POST['acompanante'] ?? '';
$viernes = isset($_POST['viernes']) && $_POST['viernes'] === 'true';
$sabado = isset($_POST['sabado']) && $_POST['sabado'] === 'true';

$viernesString = $viernes ? "Viernes" : "";
$sabadoString = $sabado ? ", Sábado" : "";

$acompananteStringA = $acompanante ? " Acompañante: $acompanante," : "";
$acompananteString = $acompanante ? " acompañado de $acompanante" : "";

$subject = "Invitado: $invitado, $acompanante Días: $viernesString $sabadoString";

$msg = "Hola, soy $invitado y asistiré $viernesString $sabadoString $acompananteString";

$recipient = "no-reply@bodacrisvic.es";

$mailheader = "From: $invitado <$recipient>\r\n";

$mailSent = mail("Noacrisvic@gmail.com", $subject, $msg, $mailheader);

?>
