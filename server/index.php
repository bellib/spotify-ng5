<?php 

header('Content-Type: application/json');
require 'curl.php';

if( isset($_GET['code']) && isset($_GET['uri']) ) {

    $code = $_GET['code'] ;
    $redirect_uri  = $_GET['uri'] ;
    $grant_type = 'authorization_code';

    $authorization = 'ZTI0MDM5MmNjODU4NDMzYjk3YzUyMGY3OWE3YWU5N2M6YWZjODIwNzVhZTZhNDZlNzg1ZmM3YTQzMmQzYTA5Y2U=';

    //API URL
$url = 'https://accounts.spotify.com/api/token';

$data = array(
    'code' => $code,
    'redirect_uri' => $redirect_uri,
    'grant_type' => $grant_type
);
$headers  = [
    'Content-Type:application/x-www-form-urlencoded',
    'Authorization:Basic ' . $authorization
];

$ret = Curl($url, $data,$headers);




 
echo($ret);

}
