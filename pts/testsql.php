<?php
/*
* Change the value of $password if you have set a password on the root userid
* Change NULL to port number to use DBMS other than the default using port 3306
*
*/
$user = 'sjoedin_me';
$password = 'ep9FkzyfaH5dgRDmw43h'; //To be completed if you have set a password to root
$database = 'sjoedin_me_db'; //To be completed to connect to a database. The database must exist.
$hostname = 'mysql16.unoeuro.com';
$port = 3306; //NULL; //Default must be NULL to use default port
$mysqli = new mysqli($hostname, $user, $password, $database, $port);

if ($mysqli->connect_error) {
    die('Connect Error (' . $mysqli->connect_errno . ') '
            . $mysqli->connect_error);
}
echo '<p>Connection OK '. $mysqli->host_info.'</p>';
echo '<p>Server '.$mysqli->server_info.'</p>';
echo '<p>Initial charset: '.$mysqli->character_set_name().'</p>';

$mysqli->close();
?>