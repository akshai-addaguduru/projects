<?php
    $postid = $_GET["postid"];
    require "database.php";

    deletePost($postid);
    header("Refresh:0; url=getposts.php");
	die();
?>