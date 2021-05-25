<?php
	require "database.php";

	//echo "$data->username,$data->postmsg,$data->post_date";

	$str_json = file_get_contents('php://input');
	$data = json_decode($str_json);
	
	echo "data=$data->username";
	if(addnewpost($data->username, $data->postmsg, $data->post_date)) {
		echo "DEBUG:addnewpost.php> $data->postmsg is added";
		//TODO: have a message
	} else {
		echo "DEBUG:addnewpost.php> $data->postmsg cannot be added";
	}
?>