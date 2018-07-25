<?php



if(isset($_POST['submit'])) {
  $name = $_POST['name'];
  $subject = "Contact From jdorfmanj Portfolio";
  $emailFrom = $_POST['email'];
  $message = $_POST['message'];
  
  $txt = "This is an automated message. \n\n $request";
  
  $mailTo = "juliusdorfman@gmail.com";
  $headers = "From: ".$emailFrom; 
  $txt = "You have received an e-mail from ".$name.".\n\n".$message;


  mail ($mailTo, $subject, $txt, $headers);
  header("Location: index.php?mailsend");
}






?>