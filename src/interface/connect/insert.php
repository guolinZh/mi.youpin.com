<?php

      require("./connect.php");


      $image = "hello";
      $title = "hello";
      $price = "123";

      $insert_query = "INSERT INTO goods 
                        (image,title,price)
                        VALUES
                        ('$image','$title','$price')
                        ";
      $insert_res = mysql_query($insert_query,$con);
      
      echo $insert_res .mysql_error();
      if(!$insert_res){
            die("数据库插入失败");
      }

      mysql_close($con);
?>