<?php  
  session_start();
  require 'database.php';

  $postid = $_REQUEST['postid'];
  $content = $_POST['content'];
  
  if(!isset($postid)){
    echo "Bad Request";
    die();
  } 
  
  function check_new_comment($postid){
    $content = $_POST['content'];
    $commenter = $_POST['commenter'];
   /*  $nocsrftoken = $_POST["nocsrftoken"];
    $sessionnocsrftoken = $_SESSION["nocsrftoken"]; */
    if (isset($content) ){
	/* if(!isset($nocsrftoken) or ($nocsrftoken!=$sessionnocsrftoken)){
	echo "Cross-site request forgery is detected!";
	die();
        } */
    if(new_comment($postid,$content,$commenter))
	echo "New comment added";
    else
	echo "Cannot add the comment";
    }
  }

  function display_singlepost($postid) {
	global $mysqli;
	echo " Post for id = $postid";
	$sql = "SELECT * FROM posts WHERE postID=?";
}

  function new_comment($postid,$content,$commenter){
    global $mysqli;
    $prepared_sql = "INSERT into comments (content,commenter,postid) VALUES (?,?,?);";
    if(!$stmt = $mysqli->prepare($prepared_sql))
    echo "Prepared Statement Error";
    $stmt->bind_param("ssi",
        htmlspecialchars($content),
        htmlspecialchars($commenter),$postid);
    if(!$stmt->execute()) {
        echo "Execute Error";
        return FALSE;
    }
   return TRUE;
   }

  check_new_comment($postid);
  display_singlepost($postid);
  display_comments($postid);
  $rand = bin2hex(openssl_random_pseudo_bytes(16));
  $_SESSION["nocsrftoken"] = $rand;

?>

<html>
<form action="comment.php?postid=<?php echo $postid; ?>" method="POST" class="form login">
  <input type="hidden" name="nocsrftoken" value="<?php echo $rand; ?>" />
  Your Name : <input type="text" name="commenter" /><br>
  Content : <textarea name="content" required cols="100" rows="10"></textarea><br>
  <button class="button" type="submit">Post New Comment</button>

</form>
</html>