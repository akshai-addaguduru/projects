function submitpost(username) {

	var xhttp = new XMLHttpRequest();
  	xhttp.onreadystatechange = function() {
	  if (this.readyState == 4 && 
			this.status == 200){
				//document.getElementById('filecontent').textContent=xhttp.responseText;
				alert(xhttp.responseText);
		}
	}
	var post = document.getElementById("post").value;
	var data = {
		"username" : username,
		"postmsg" : post,	
		"post_date" : new Date()
	};
	alert(data);
	alert(post);
    xhttp.open("POST", "/project/posts.php", true);
    xhttp.setRequestHeader("Content-type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify(data));
}