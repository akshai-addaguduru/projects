
<html>
      <h1>New User? Sign Up Here Now!</h1>

  <head>
      <link rel="stylesheet" href="style.css">
  </head>
  
<?php
  //some code here
  echo "Current time: " . date("m-d-Y h:i:sa")
?>

      <div class="form">
         <form action="addnewuser.php" method="POST" class="form login">
                   	
          Username:<input type="text" class="text_field" name="username" required

         	pattern="^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$"
          	title="Please enter a valid Username"
          	placeholder="Your email address"
          	onchange="this.setCustomValidity(this.validity.patternMismatch?this.title: '');" /> <br>

          Password: <input type="password" class="text_field" name="password" required
          	
      			pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&])[\w!@#$%^&]{8,}$"
      			placeholder="Your password"
      			title="Password must has at least 8 characters with 1 special symbol !@#$%^& 1 number, 1 lowercase, and 1 UPPERCASE"
      			onchange="this.setCustomValidity(this.validity.patternMismatch?this.title:' '); form.repassword.pattern this.value;"/>
		
          Retype Password: <input type="password" class="text_field" name="repassword"
      			placeholder="Retype your password" required
      			title="Password does not match"
      			onchange="this.setCustomValidity(this.validity.patternMismatch?this.title: '');"/> <br>

          PhoneNo: <input type="text" name="phoneno" 
            pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$"
            title="Enter a valid contact number"
            placeholder="Your phone number"
            onchange="this.setCustomValidity(this.validity.patternMismatch?this.title: ' ');" /> <br>

          	<button class="button" type="submit">
            	Sign Up!
            </button>
 <br>
          </form>
        </div>
  </html>

