<?php include 'function/connection.php'; ?>


<form action="function/add_gallery.php" method="POST" enctype="multipart/form-data">
                                    <div class="row">
                                        <div class="col-md-8">
                                            <div class="form-group">
                                                <label>gallery Image</label>
                                                <input type="file" class="form-control" name="gallery_img">
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label>gallery Name</label>
                                                <input type="text" class="form-control" placeholder="gallery name" name="gallery_name">
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" class="btn btn-info btn-fill pull-right">Add gallery</button>
                                    <div class="clearfix"></div>
                                </form>