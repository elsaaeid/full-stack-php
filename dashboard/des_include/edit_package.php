<?php

 include 'function/connection.php';

$id =isset($_GET['id']) && is_numeric($_GET['id']) ? intval($_GET['id']) : exit();

$stmt = $coo->prepare("SELECT * FROM package WHERE id = ?");
$stmt->execute([$id]);
$row = $stmt->fetch();



?>


<form action="function/update_package.php" method="POST" enctype="multipart/form-data">

<input type="hidden" name="id" value="<?php echo $row["id"]?>">
<img src="uploade/package/<?php echo $row["package_img"]?>" style="width:300px;height:250px;margin=lift:450px;">
                                    <div class="row">
                                        <div class="col-md-8">
                                            <div class="form-group">
                                                <label>Package Image</label>
                                                <input type="file" class="form-control" name="package_img">
                                            </div>
                                        </div>
                                        <input type="hidden" name="old_img" value="<?php echo $row["package_img"]?>"> 
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label>Package Title</label>
                                                <input type="text" class="form-control" placeholder="package title" name="package_title value="<?php echo $row["package_title"]?>">
                                            </div>
                                        </div>
                                    </div>



                                    <button type="submit" class="btn btn-info btn-fill pull-right">Edit Package</button>
                                    <div class="clearfix"></div>
                                </form>