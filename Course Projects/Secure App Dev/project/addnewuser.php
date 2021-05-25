<?php
	require "database.php";

	$username = $_POST["username"];
	$password = $_POST["password"];
	$phoneno  = $_POST["phoneno"];
	//$enabled  = $_POST["enabled"];
	
	if(!validateUsername($username) or !validatePassword($password)) {
		echo "TODO: error";
		die();
	}

	echo "DEBUG:addnewuser.php>username=$username; password=$password; phoneno=$phoneno <br>";
	
	if(addnewuser($username,$password,$phoneno)) {
		echo "DEBUG:addnewuser.php> $username is added";
		//TODO: have a message
	} else {
		echo "DEBUG:addnewuser.php> $username cannot be added";
	}

	


	function validateUsername($username)
	{
		//TODO: validate the username
		return TRUE;
	}

	function validatePassword($password)
	{
		//TODO: validate the password
		return TRUE;
	}

	function validatePhoneNo($phoneno)
	{
		//TODO: validate the phoneno
		return TRUE;
	}

	/*function validateEnabled($enabled)
	{
		//TODO: validate the phoneno
		return TRUE;
	}*/

	
//<a href="form.php"> Hurray! You are signed up! Login Now </a>

?>	

<html>

<head>
      <link rel="stylesheet" href="style.css">
  </head>
  
	<button class="button" type="submit" button onclick="window.location.href = 'form.php';" >
	REGISTERED!LOGIN NOW
	</button>
<html>