<?php
  require "session_auth.php";
  $rand=bin2hex(openssl_random_pseudo_bytes(16));
  $_SESSION["nocsrftoken"]=$rand;
?>
<html>

<head>
      <link rel="stylesheet" href="style.css">
  </head>
  
      <h1>Change Password</h1>
      <h4>SecAD-S19 Lab 6.2 by Akshai</h4>
<?php
  //some code here
  echo "Current time: " . date("Y-m-d h:i:sa")
?>
    <form action="changepassword.php" method="POST" class="form login">
      Username:<!--input type="text" class="text_field" name="username" /-->
        <?php echo htmlentities($_SESSION["username"]); ?> <br>
               
      New Password: <input type="password" class="text_field" name="newpassword" 
      pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&])[\w!@#$%^&]{8,}$"
      placeholder="Your password"
      title="Password must has at least 8 characters with 1 special symbol !@#$%^& 1 number, 1 lowercase, and 1 UPPERCASE"
      onchange="this.setCustomValidity(this.validity.patternMismatch?this.title:' '); form.repassword.  pattern this.value;"

      /> <br>

      <input type="hidden" name="nocrsftoken" value="<?php echo $rand; ?>" />          
      <button class="button" type="submit">
        Change Password
      </button>
    </form>

    <button class="button" type="submit" button onclick="window.location.href = 'index.php';">
      Back to Previous Page
    </button>
  

  </html>

