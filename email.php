<?php

// if ($_SERVER['REQUEST_METHOD'] === "POST") {
//   // if it is a post request
//  var_dump($_POST); exit();

//  $firstname = $_POST['invitado']; // change username with the name attribute of your input field

//  // then email the result to your email

//  $email = 'hectoriko@gmail.com';   //change this too ;)
//  $subject = 'I have no idea what to put as subject'; //:)
//  $body = 'Someone has input ' . $firstname;

// //  mail($email, $subject, $body);


//  ///////////////

//  // the message
//  $msg = "First line of text\nSecond line of text";

//  // use wordwrap() if lines are longer than 70 characters
//  $msg = wordwrap($msg,70);

//  // send email
//  mail($email, $subject, $msg);
// }

$name = $_POST['invitado'];
// $acompanante = $_POST['acompanante'];
$subject = 'I have no idea what to put as subject';
$msg = "First line of text\nSecond line of text";

$recipient = "Noacrisvic@gmail.com";

$mailheader = "From:" . $name . "<" . $recipient . ">\r\n";

mail($recipient, $subject, $msg, $mailheader) or die("Error!");

echo "email sent!"

?>
