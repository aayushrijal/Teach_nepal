<?php
	include('read_csv_file_data_to_sql_1.php');
		
		if($_GET['district']){
			$var = $_GET['district'];
			$sql = "SELECT Year,Total,Male,Female".
				"FROM data1".
				"WHERE District = $var";
			
			$retval = mysql_query($sql,$db_handle);
			$row = mysql_fetch_array($retval,MYSQL_ASSOC) ;
				echo "Year:{$row['Year']} Total:{$row['Total']} Male:{$row['Male']} Female:{$row['Female']}";
				$data = json_encode($row);
		}
