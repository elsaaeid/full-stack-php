<?php

include 'connection.php';

if($_SERVER['REQUEST_METHOD'] == 'POST'){
	
	$img = $_FILES['package_img'];
	
	if(! empty($img['name'])){
		
	$img = $_FILES['img'];
	$img_name = $img['name'];
	$img_size = $img['size'];
	$img_error = $img['error'];
	$img_temp = $img['tmp_name'];
	
	$allowed_img = array('jpg','png','jpeg');
	
	
	if($img_error == 4){
		
		echo 'please uploade file';
		exit();
		
	}else{
		
		$img_explode = explode('.',$img_name);
		
//		print_r($img_explode);
		
		$img_extension = end($img_explode);
		
//		echo $img_extension;
		$new_name = rand(0, 1000000000) . '.' . $img_extension; 
//		صوره جديده
		
		if(! in_array($img_extension,$allowed_img)){
			
			echo 'please choice another file'
			exit();
		}else{
			
			if($img_size > 15728640){
				
				echo 'please choise another file bigger tnan 5 MB'
				exit();
			}else{
				
				move_uploaded_file($img_temp, '../uploade/package/' .$new_name);
				
			}
		}
    }
 }elseif ( empty($img['name'])) {
   $new_name = $_POST['old_img'];
}
$id = $_POST['id'];

$package_img = filter_var($_POST['package_img'],FILTER_SANITIZE_STRENG);
$package_title =  filter_var($_POST['package_title'],FILTER_SANITIZE_STRENG);

$stmt = $coon->prepare("UPDATE package SET package_img = ?,package_title = ? WHERE id = ?");
$stmt->execute([$new_name,$package_title,$id]);
    header("Location:../package.php");
    exit();
}