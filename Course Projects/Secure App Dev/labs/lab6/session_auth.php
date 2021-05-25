<?php
	$lifetime =15 * 60;
	$path = "/lab6";
	$domain = "addagudurua1.com";
	$secure = TRUE;
	$httponly = TRUE;
	session_set_cookie_params($lifetime, $path, $domain, $secure, $httponly);	
	session_start();  

	if (!isset($_SESSION["logged"]) or $_SESSION["logged"] != TRUE) {
		echo "<script>alert('You've not logged in yet. Login first!');</script>";
		header("Refresh:0; url=form.php");
		die();
	}

	if ($_SESSION["browser"] != $_SESSION["HTTP_USER_AGENT"]) {
		echo "<script>alert('WARNING! Session Hijacking Detected');</script>";
		header("Refresh:0; url=form.php");
		die();
	}

?>