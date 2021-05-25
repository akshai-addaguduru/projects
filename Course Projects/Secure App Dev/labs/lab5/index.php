<?php
	session_start();    
	if (securechecklogin($_POST["username"],$_POST["password"])) {
?>
	<h2> Welcome <?php echo htmlentities($_POST['username']); ?> !</h2>
<?php		
	} else {
		echo "<script>alert('Invalid username/password');</script>";
		die();
	}
	function securechecklogin($username, $password) {
		echo "user: $username pass: $password";
		$mysqli = new mysqli('localhost','akshai','akki','secad_s19');
		if($mysqli->connect_errno) {
			printf("Connection Failed: %s\n",$mysqli->connect_error);
			exit();
		}
		$sql = "Select * FROM users WHERE username=?" ." AND password=password(?);";
  		if(!$stmt = $mysqli->prepare($prepared_sql))
  			echo "\tPrepared Statement Error";
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
