<?php
include 'function/connection.php';

$errorMSG = "";

// NAME
if (empty($_POST["name"])) {
    $errorMSG = "Name is required ";
} else {
    $name = $_POST["name"];
}

// EMAIL
if (empty($_POST["email"])) {
    $errorMSG .= "Email is required ";
} else {
    $email = $_POST["email"];
}

// Subject
if (empty($_POST["subject"])) {
    $errorMSG .= "Subject is required ";
} else {
    $subject = $_POST["guest"];
}

// MESSAGE
if (empty($_POST["message"])) {
    $errorMSG .= "Message is required ";
} else {
    $message = $_POST["message"];
}


$EmailTo = "armanmia7@gmail.com";
$Subject = "New Message Received";

// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $name;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
$Body .= "guest: ";
$Body .= $guest;
$Body .= "\n";
$Body .= "event: ";
$Body .= $event;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $message;
$Body .= "\n";

// send email
$success = mail($EmailTo, $Subject, $Body, "From:".$email);

// redirect to success page
if ($success && $errorMSG == ""){
   echo "success";
}else{
    if($errorMSG == ""){
        echo "Something went wrong :(";
    } else {
        echo $errorMSG;
    }
}







 
 
 $title=$_POST["title"];
 
 
 $result=mysql_query("SELECT * FROM search where search like '%$title%' and post_status='publish'");
 $found=mysql_num_rows($result);
 
 if($found>0){
 	while($row=mysql_fetch_array($result)){
 	echo "<li>$row[post_title]</br>
 	        <a href=$row[guid]>$row[guid]</a></li>";
    }   
 }else{
 	echo "<li>No Tutorial Found<li>";
 }
 // ajax search
?>