<?php
require 'session_auth.php';
require 'database.php';

$rand=bin2hex(openssl_random_pseudo_bytes(16));
$_SESSION["nocsrftoken"]=$rand;

$username=$_SESSION['username'];

if(isset($_POST["editpost"]))
{
  viewposts($_SESSION["username"], $_POST["newpost"], date("r"));
  echo "New POST is added";
}



$mysqli = new mysqli('localhost','akshai','akki','secad_s19');
	if($mysqli->connect_errno) {
		printf("Connection Failed: %s\n",$mysqli->connect_error);
		exit();
	}
	$prepared_sql = "SELECT postID,postmsg FROM posts where username='$username';";
	$result = $mysqli->query($prepared_sql);
/*		$result = mysqli_num_rows($result);*/

if ($result->num_rows > 0) {
	echo "<h4> Your Statuses </h4> <br>";
	while($row=$result->fetch_assoc())
	{
		echo "<tr><td>".$row["postID"]. "</td><td>".$row["postmsg"]." </td></tr><br>";
		//echo $row['content'] . "<br/>";
		echo "<input type='button' name='editpost' value='Edit' onclick=\"window.location.href = 'editpost.php?postid=".$row["postID"]."'\"> ";
		echo "<input type='button' name='editpost' value='Delete' onclick=\"window.location.href = 'deletePost.php?postid=".$row["postID"]."'\"> <br> <br>";
	
		/* echo "<input type='button' name='comment' value='COMMENT THIS POST' onclick=\"window.location.href = 'comment.php?postid=".$row["postID"]."'\"> <br> <br>"; */
	}
}

?>

<html>
	
<br>
<button class="button" type="submit" button onclick="window.location.href = 'addpost.php';" >
    GO BACK
</button>
<button class="button" type="submit" button onclick="window.location.href = 'index.php';" >
    HOME
</button>



</html>		