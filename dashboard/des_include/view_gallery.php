<?php include 'function/connection.php'; ?>

<a href="?gallery=add"> Add New Gallery</a>


<table class="table table-hover table-striped">
                                    <thead>
                                        <th>ID</th>
                                    	<th>Gallery_Image</th>
                                    	<th>Gallery_Name</th>
                                    </thead>
                                    <tbody>
                                        <?php
                                        $stmt = $coon->prepare("SELECT * FROM gallery ORDER BY id DESC");
                                        $stmt->execute();
                                        while($row = $stmt->fetch()){
                                            ?>
                                        <tr>
                                        	<td><?php echo $row['id']?></td>
                                        	<td><img src="uploade/gallery/<?php echo $row['gallery_img']?>" style="width:300px;height:250px;"></td>
                                        	<td><?php echo $row['gallery_name']?></td>
                                            <td><a href="?gallery=edit&id=<?php echo $row['id']?>" class="btn btn-warning btn-sm"><i class="fa fa_edit"></i>Edit</a>
                                            <a href="function/delete_gallery.php?id=<?php echo $row['id']?>" class="btn btn-delete btn-sm" style="display: inline-block"><i class="fa fa_trash"></i>Delete</a>
                                            </td>
                                        </tr>
                                        <?php } ?>
                                    </tbody>
                                </table>
