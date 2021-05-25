<?php

require 'database.php';
require 'session_auth.php';

$rand=bin2hex(openssl_random_pseudo_bytes(16));
$_SESSION["nocsrftoken"]=$rand;

$postid = $_GET['postid'];

$mysqli = new mysqli('localhost','akshai','akki','secad_s19');
  if($mysqli->connect_errno) {
    printf("Connection Failed: %s\n",$mysqli->connect_error);
    exit();
}

$prepared_sql = "SELECT * FROM posts WHERE postID = ? ";
$stmt = $mysqli->prepare($prepared_sql);
$stmt->bind_param('i', $postid);
$stmt->execute();
$result = $stmt->get_result();
$row=mysqli_fetch_assoc($result);
$username = $row["username"];
$postmsg=$row["postmsg"];

if($username!= $_SESSION["username"]) {
  echo "No Username/Post Matching";
  die();
}
else{
  if(isset($editpost)){
  echo "Updating Post for $username";
  echo "<br>";
  
  if(updateposts($postid,$editpost))
    echo "Post is Updated";
    else
    echo "Cannot Update the Post";
}

}

?>

<html>
<head>
      <link rel="stylesheet" href="style.css">
  </head>
      <h3>Update Your Post</h3> 
      <a href="index.php">Home</a>
<?php

  //some code here
    $postid = $_REQUEST['postid'];
  //echo "Current time: " . date("Y-m-d h:i:sa");
?>         
  <form action="updateposts.php" method="POST" class="form login">
  <br>
  <input type="hidden" name="nocsrftoken" value="<?php echo $rand;?>"/>
  <input type="hidden" name="postid" value="<?php echo $postid;?>"/>
  <br>
  <input type="textarea" name="editpost" required cols="2" rows="2"  title="Update post" value="<?php echo $postmsg;?>"/>
  <br>
  <button class="button" type="submit">
  Update Post
  </button>
  </form>  </html>
