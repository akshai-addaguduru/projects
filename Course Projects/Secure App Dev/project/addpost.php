<?php

require 'database.php';
require 'session_auth.php';

$rand=bin2hex(openssl_random_pseudo_bytes(16));
$_SESSION["nocsrftoken"]=$rand;

echo date("r");

if(isset($_POST["newpost"]))
{
  addnewpost($_SESSION["username"], $_POST["newpost"], date("r"));
  echo "New POST is added";
}

?>

<html>
<head>
      <link rel="stylesheet" href="style.css">
  </head>

<form action="addpost.php" method="POST" class="addpost">  
	<input type="hidden" name="nocsrftoken" value="<?php echo $rand;?>"/>   	
        <!--Status Box--> <br>
  <h4>Post a Status Here</h4> <textarea name="newpost" rows="10" cols="50"> </textarea> <br>
  <button class="button" type="submit" >
    Post
  </button>

</form>

<button class="button" type="submit" button onclick="window.location.href = 'getposts.php';" >
	View
</button>

<button class="button" type="submit" button onclick="window.location.href = 'index.php';">
  Back
</button>

</html> 