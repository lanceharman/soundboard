<?php

	try{
		if (isset($_FILES['upload_file'])) {

			$white_list = array("mp3", "wav", "ogg");
			$file_path = $_FILES['upload_file']['name'];
			$ext = pathinfo($file_path, PATHINFO_EXTENSION);

			if(! in_array($ext, $white_list)){
				throw new Exception("Unknown File Type");
			}

		    if(move_uploaded_file($_FILES['upload_file']['tmp_name'], "sounds/" . $_FILES['upload_file']['name'])){
		        echo $_FILES['upload_file']['name']. " Uploaded Successfully";
		    } else {
		        echo $_FILES['upload_file']['name']. " Upload Failed!";
		    }

		    exit;

		} else {
		    echo "No files uploaded ...";
		}
	}

	catch(Exception $e){
		exit($e -> getMessage());
	}


?>