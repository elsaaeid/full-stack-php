<?php include 'function/connection.php'; ?>

<form action="function/add_package.php" method="POST" enctype="multipart/form-data">
                                    <div class="row">
                                        <div class="col-md-8">
                                            <div class="form-group">
                                                <label>Package Image</label>
                                                <input type="file" class="form-control" name="blog_img">
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label>Package Title</label>
                                                <input type="text" class="form-control" placeholder="Blog Title" name="blog_title">
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" class="btn btn-info btn-fill pull-right">Add Package</button>
                                    <div class="clearfix"></div>
                                </form>