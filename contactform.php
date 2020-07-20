<?php

if (isset($_POST['submit'])){
    $name = $_POST['name'];
    $emailFrom = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];


    $mailTo = "throwawaymail531@protonmail.com";
    $headers = "From: ".$emailFrom;
    $txt = "Email from".$name.".\n\n".$message;
    

    mail($mailTo, $subject, $txt, $headers);
    header("Location: index.php?mailsend");

}

?>

