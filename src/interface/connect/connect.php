<?php
      header("Content-Type: text/html;charset=utf-8");

      # 1.概述: mysql_connect  链接数据库用的;
      # 2. 参数共有3个 1. 链接名称 : localhost[:3307]
      #               2. 用户账号 : root;
      #               3. 用户密码 : root;
      # 3. 返回值 为新类型 resource ( 资源 ); 

      $con = mysql_connect("localhost:3307","root","root");
      
      // $con 链接成功时 : resource
      //      链接失败   : 0;

      if(!$con){
            die("数据库连接失败". mysql_error());
      }
?>