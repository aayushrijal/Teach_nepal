<?php	
	$data;
	$db_host = 'localhost';
	$db_user = 'root';
	$db_password = 'asdf123';
	$db_name = 'csv_data';
	$file_name = "Number of Teachers in Nepal from the year 2007 - 2012.csv";

	$db_handle = mysql_connect($db_host,$db_user,$db_password) or die('Cannot connect to mysql database');
	mysql_select_db($db_name);

	$file_handle = fopen($file_name,'r')or die('Cannot open'.$file_name);
			$i = 0;
			while( !feof($file_handle) ){
				if( $id == 1) 
					continue;

			$data =  fgetcsv($file_handle) ;   // data here is a array
			$sql = "INSERT INTO data1".
	 			"(id,District,Year,Total,Male,Female)".
				"values($i,'{$data[0]}',$data[1],$data[2],$data[3],$data[4])";   // use of '$data[6]' will get the strings also
			$retval = mysql_query($sql,$db_handle);
				$i++;
		}








?>
