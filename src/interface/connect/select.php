<?php
      
      require("./connect.php");

      $result = mysql_query("SELECT * FROM goods");;

      while($row = mysql_fetch_array($result)){
            echo json_encode($row);
      }

      mysql_close();
?>