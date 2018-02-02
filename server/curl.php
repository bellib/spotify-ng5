<?php
class Log {
    public static function debug($str) {
        //print "DEBUG: " . $str . "\n";
    }
    public static function info($str) {
//print "INFO: " . $str . "\n";
    }
    public static function error($str) {
        //print "Error: " . $str . "\n";
    }
}
function Curl($url, $post_data, $header ,  $http_status ='' ) {
    //Log::debug("Curl $url JsonData=" . print_r($post_data));
    $ch=curl_init();
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    // user credencial
    curl_setopt($ch, CURLOPT_USERPWD, "username:passwd");
    curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_URL, $url);
    // post_data
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($post_data) ) ;
    if (!is_null($header)) {
        curl_setopt($ch, CURLOPT_HEADER, true);
    }
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
    curl_setopt($ch, CURLOPT_VERBOSE, true);
    $response = curl_exec($ch);
    Log::debug('Curl exec=' . $url);

    $body = null;
    // error
    if (!$response) {
        $body = curl_error($ch);
        // HostNotFound, No route to Host, etc  Network related error
        $http_status = -1;
        Log::error("CURL Error: = " . $body);
    } else {
       //parsing http status code
        $http_status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        if (!is_null($header)) {
            $header_size = curl_getinfo($ch, CURLINFO_HEADER_SIZE);
            $header = substr($response, 0, $header_size);
            $body = substr($response, $header_size);
        } else {
            $body = $response;
        }
    }
    curl_close($ch);
    return $body;
}
