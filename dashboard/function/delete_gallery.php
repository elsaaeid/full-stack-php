<?php

include 'connection.php';

$id = isset($_GET["id"]) && is_numeric($_GET['id']) ? intval($_GET['id']) : exit();

$stmt = $coon->prepare("DELETE * FROM gallery WHERE id = ?");
$stmt->execute([$id]);


header("Location:../gallery.php");
exit();

?>