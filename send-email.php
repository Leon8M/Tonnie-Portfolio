<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$to = 'anthonykimathi2007@gmail.com';
$subject = 'New Contact Form Submission';
$body = "Name: $name\nEmail: $email\nMessage:\n$message";

$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-type: text/plain; charset=UTF-8\r\n";

mail($to, $subject, $body, $headers, 'anthonykimathi2007@gmail.com');

echo 'Thank you for your message!';
?>
