<?php

	require "session_auth.php";
	require 'database.php';
	
	$username = $_SESSION["username"];
	$newpassword = $_REQUEST["newpassword"];

	$nocsrftoken = $_REQUEST["nocrsftoken"];
	if(!isset($nocsrftoken) OR ($nocsrftoken!=$_SESSION['nocsrftoken'])) {
		echo "<script>alert('Cross-site request forgery is detected!');</script>";
		header("Refresh:0; url=logout.php");
		die();
	}

	if(isset($username) AND isset($newpassword)) {
		echo "DEBUG:changepassword.php->Got: username=$username; newpassword=$newpassword;<br>";
		if(changepassword($username,$newpassword)) {
			echo "<h4>The new password has been set.</h4>";
		} else
		{
			echo "<h4>Error: Cannot change the password.</h4>";
		}
	}
	else {
		echo "No provided username/password to change";
		exit();
	}
?>
<a href="index.php">Home</a> | <a href="logout.php">Logout</a>