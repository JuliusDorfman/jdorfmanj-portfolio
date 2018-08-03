


<?php

if(isset($_POST['submit'])) {
  $name = $_POST['name'];
  $subject = "Contact From jdorfmanj Portfolio";

  $emailFrom = $_POST['email'];
  $message = $_POST['message'];
  
  $mailTo = "juliusdorfman@gmail.com";
  $headers = "From: ".$emailFrom; 
  $txt = "You have received an e-mail from ".$name.".\n\n".$message;


  mail ($mailTo, $subject, $txt, $headers);
} else {
  echo "failed";
}

?> 