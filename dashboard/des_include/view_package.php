<?php include 'function/connection.php'; ?>

<a href="?package=add"> Add New Package</a>


<table class="table table-hover table-striped">
                                    <thead>
                                        <th>ID</th>
                                    	<th>Package_Image</th>
                                    	<th>Package_Title</th>
                                        <th>Action</th>
                                    </thead>
                                    <tbody>
                                        <?php
                                        $stmt = $coon->prepare("SELECT * FROM package ORDER BY id DESC");
                                        $stmt->execute();
                                        while($row = $stmt->fetch()){
                                            ?>
                                        <tr>
                                        	<td><?php echo $row['id']?></td>
                                        	<td><img src="uploade/package/<?php echo $row['package_img']?>" style="width:300px;height:250px;"></td>
                                        	<td><?php echo $row['package_title']?></td>
                                            <td><a href="?package=edit&id=<?php echo $row['id']?>" class="btn btn-warning btn-sm"><i class="fa fa_edit"></i>Edit</a>
                                            <a href="function/delete_package.php?id=<?php echo $row['id']?>" class="btn btn-delete btn-sm"><i class="fa fa_trash"></i>Delete</a>
                                            </td>
                                        </tr>
                                        <?php } ?>
                                    </tbody>
                                </table>
