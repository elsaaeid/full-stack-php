<?php

 include 'function/connection.php';

$id =isset($_GET['id']) && is_numeric($_GET['id']) ? intval($_GET['id']) : exit();

$stmt = $coo->prepare("SELECT * FROM gallery WHERE id = ?");
$stmt->execute([$id]);
$row = $stmt->fetch();



?>


<form action="function/update_gallery.php" method="POST" enctype="multipart/form-data">

<input type="hidden" name="id" value="<?php echo $row["id"]?>">
<img src="uploade/gallery/<?php echo $row["pro_gallery"]?>" style="width:300px;height:250px;margin=lift:450px;">
                                    <div class="row">
                                        <div class="col-md-8">
                                            <div class="form-group">
                                                <label>Gallery Image</label>
                                                <input type="file" class="form-control" name="gallery_img">
                                            </div>
                                        </div>
                                        <input type="hidden" name="old_img" value="<?php echo $row["gallery_img"]?>"> 
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label>Gallery Name</label>
                                                <input type="text" class="form-control" placeholder="gallery name" name="gallery_name" value="<?php echo $row["gallery_name"]?>">
                                            </div>
                                        </div>
                                    </div>



                                    <button type="submit" class="btn btn-info btn-fill pull-right">Edit Gallery</button>
                                    <div class="clearfix"></div>
                                </form>