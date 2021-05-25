<?php

    require 'database.php';
    require 'session_auth.php';

    $rand=bin2hex(openssl_random_pseudo_bytes(16));
    $_SESSION["nocsrftoken"]=$rand;
    $postid = $_POST['postid'];
    $editpost = $_POST['editpost'];

    echo "post: $postid newpost: $editpost";
    updatePost($postid, $editpost);
    header("Refresh:0; url=editpost.php?postid=".$postid);
	die();
?>