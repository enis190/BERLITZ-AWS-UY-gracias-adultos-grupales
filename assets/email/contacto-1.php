<?php

// $curl = curl_init();

// curl_setopt_array($curl, array(
//   CURLOPT_URL => 'https://algoritmo.digital/frm_contacto/actual/brasil.php',
//   CURLOPT_RETURNTRANSFER => true,
//   CURLOPT_ENCODING => '',
//   CURLOPT_MAXREDIRS => 10,
//   CURLOPT_TIMEOUT => 0,
//   CURLOPT_FOLLOWLOCATION => true,
//   CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
//   CURLOPT_CUSTOMREQUEST => 'POST',
//   CURLOPT_POSTFIELDS =>'{
//     "nombre": "'.$_POST['nombre'].'",
//     "email": "'.$_POST['email'].'",
//     "interesado": "'.$_POST['interesado'].'",
//     "celular": "'.$_POST['celular'].'",
//     "apellidos": "'.$_POST['apellidos'].'"
// }',
//   CURLOPT_HTTPHEADER => array(
//     'content-type: application/json',
//     'cache-control: no-cache'
//   ),
// ));

// $response = curl_exec($curl);

// curl_close($curl);
// echo $response;




$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://algoritmo.digital/frm_contacto/actual/brasil.php',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS =>'{
    "nombre": "Elvis Prueba",
    "email": "elvis.nicolas@gmail.com",
    "interesado": "12345678",
    "celular": "12345678",
    "apellidos": "Nicolas"
}',
  CURLOPT_HTTPHEADER => array(
    'content-type: application/json',
    'cache-control: no-cache'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
