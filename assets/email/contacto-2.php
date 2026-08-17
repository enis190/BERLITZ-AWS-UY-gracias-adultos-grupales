





<?php

//$to = "mediosdigitales@godigital.pe, fundacion@frrz.cl";
$to = "mediosdigitales@godigital.pe, ivan.gonzales@algoritmo.digital";
$subject = "Mensaje de Contacto - ACADIA - ".date("YmdHi");
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

$message = file_get_contents("contacto-2_view.html");
$message = str_replace('[nombre]',$_POST['nombre'], $message);
$message = str_replace('[apellido]',$_POST['apellido'], $message);
$message = str_replace('[wsp]',$_POST['wsp'], $message);
$message = str_replace('[email]',$_POST['email'], $message);


$headers .= 'From: administracion@algoritmo.digital' . "\r\n" .
			'Reply-To: administracion@algoritmo.digital' . "\r\n" .
			'X-Mailer: PHP/' . phpversion();


if (mail($to, $subject, $message, $headers)) {
    echo '1';
} else {
    echo '0';
}



?>