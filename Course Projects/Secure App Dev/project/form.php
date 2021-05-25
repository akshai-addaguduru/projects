
<html>
      <h1>Login</h1>

<head>
      <link rel="stylesheet" href="style.css">
</head>
<?php
  //some code here
  echo "Current time: " . date("Y-m-d h:i:sa")
?>
    <form action="index.php" method="POST" class="form login">
        <div align="center" class="login-page">
            Username:<input type="text" placeholder="username or email ID here" class="text_field" name="username" /> <br>
            Password: <input type="password" placeholder="enter your password" class="text_field" name="password" /> <br>
            <button class="button" type="submit">
            Login
            </button>
            <p class="message">Not a User? <a href="registrationform.php"> Sign Up Here </a> </p>
        </div>
    </form>
</html>

