<?php
	$lifetime =15 * 60;
	$path = "/project";
	$domain = "addagudurua1.com";
	$secure = TRUE;
	$httponly = TRUE;
	session_set_cookie_params($lifetime, $path, $domain, $secure, $httponly);	
	session_start();    

	if (isset($_POST["username"]) and isset($_POST["password"])) {
		if (securechecklogin($_POST["username"],$_POST["password"])) {
			$_SESSION["logged"] = TRUE;
			$_SESSION["username"] = $_POST["username"];
			$_SESSION["browser"] = $_SERVER["HTTP_USER_AGENT"];
		} 
		else {
			echo "<script>alert('Invalid username/password');</script>";
			unset($_SESSION["logged"]);
			header("Refresh:0; url=form.php");
			die();
		}
	}

	if (!isset($_SESSION["logged"]) or $_SESSION["logged"] != TRUE) {
		echo "<script>alert('You've not logged in yet. Login first!');</script>";
		header("Refresh:0; url=form.php");
		die();
	}

	if ($_SESSION["browser"] != $_SERVER["HTTP_USER_AGENT"]) {
		echo "<script>alert('WARNING! Session Hijacking Detected');</script>";
		header("Refresh:0; url=form.php");
		die();
	}
	$username = $_SESSION["username"];

?>
<html>
<head>
      <link rel="stylesheet" href="style.css">
  </head>

</form>
	<h2> Welcome <?php echo htmlentities($_SESSION["username"]); ?> !</h2>
	<a href="changepasswordform.php"> Change Password </a> || <a href="logout.php"> Logout </a> <br> <br>
	<a href="addpost.php"> Handle Posts </a>
  </form>  </html>
        
<?php

	function securechecklogin($username, $password) {
		echo "user: $username pass: $password";
		$mysqli = new mysqli('localhost','akshai','akki','secad_s19');
		if($mysqli->connect_errno) {
			printf("Connection Failed: %s\n",$mysqli->connect_error);
			exit();
		}
		$prepared_sql = "SELECT * FROM users WHERE username=?" ." AND password=password(?);";
  		if(!$stmt = $mysqli->prepare($prepared_sql))
  			echo "Prepared Statement Error";
  		$stmt->bind_param("ss",$username,$password);
  		if(!$stmt->execute()) echo "Execute Error";
  		if(!$stmt->store_result()) echo "Store_result Error";
		$result = $stmt;
		if($result ->num_rows ==1){
			return true;
		}
		return false;
	}
?>
