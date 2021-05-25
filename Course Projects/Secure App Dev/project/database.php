<?php


$mysqli = new mysqli('localhost','akshai','akki','secad_s19');
		if($mysqli->connect_errno) {
			printf("Connection Failed: %s\n",$mysqli->connect_error);
			exit();
		}

function changepassword($username, $newpassword) {
		global $mysqli;
		//echo "user: $username pass: $newpassword";
		$prepared_sql = "UPDATE users SET password=password(?) WHERE username=?;";
		echo "DEBUG>prepared_sql=$prepared_sql\n";

  		if(!$stmt = $mysqli->prepare($prepared_sql)) 
  			return FALSE;
		
		$stmt->bind_param("ss",$newpassword,$username);
		
		if(!$stmt->execute()) 
			return FALSE;
		
		return TRUE;
	}


function addnewuser($username, $newpassword, $phoneno) {
		global $mysqli;
		$prepared_sql = "INSERT INTO users VALUES (?, password(?), ?);";
		echo "DEBUG>addnewuser.php->addnewuser->prepared_sql=";

  		if(!$stmt = $mysqli->prepare($prepared_sql)) 
  			return FALSE;
		
		$stmt->bind_param("sss",$username,$newpassword,$phoneno);
		
		if(!$stmt->execute()) 
			return FALSE;
		
		return TRUE;
		
	}


function addnewpost($username, $postmsg, $date) {
		global $mysqli;
		$prepared_sql = "INSERT INTO posts (postmsg, username, post_date) VALUES (?,?,?);";
		echo "DEBUG>addnewpost->prepared_sql= $prepared_sql";
  		if(!$stmt = $mysqli->prepare($prepared_sql)) 
  			return FALSE;
		$stmt->bind_param("sss", $postmsg, $username, $date);
		
		if(!$stmt->execute()) 
			return FALSE;
		return TRUE;
	}

	function viewposts() {
    global $mysqli;
    $prepared_sql = "SELECT * FROM posts";
    $result = $mysqli->query($prepared_sql);
    if($result->num_rows>0) {
      //output data of each row
    while($row=$result->fetch_assoc()) {
    	$postid = $row["postID"];
        echo "<h3>Post ". $postid . "</h3>";
        echo $row["newpost"]. "<br>";
    }

	} else {
      echo "No post in this blog yet <br>";
      echo "<hr>";
    }

}

function updatePost($postid, $postmsg) {
	global $mysqli;
	$prepared_sql = "UPDATE posts SET postmsg=? WHERE postID=?;";

		if(!$stmt = $mysqli->prepare($prepared_sql)) 
			return FALSE;
	
	$stmt->bind_param("si",$postmsg, $postid);
	
	if(!$stmt->execute()) 
		return FALSE;
	
	return TRUE;
}

function deletePost($postid) {
	global $mysqli;
	$prepared_sql = "DELETE FROM posts WHERE postID=?;";

		if(!$stmt = $mysqli->prepare($prepared_sql)) 
			return FALSE;
	
	$stmt->bind_param("i", $postid);
	
	if(!$stmt->execute()) 
		return FALSE;
	
	return TRUE;
}


?>