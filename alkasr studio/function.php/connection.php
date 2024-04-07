<?php
$dsn = "mysql:host=localhost;dbname:alkasrstudio";
$username = 'root';
$password = '';
$coon->set_charset('utf8');

$option =array(
    PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"
 );

try{
    $coon = new PDO($dsn,$username,$password,$option);
    $coon->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}

catch(PDOException $e){

    echo 'Faild Connection';
}
?>