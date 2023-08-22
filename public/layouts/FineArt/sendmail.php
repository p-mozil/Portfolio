<?php
$name_surname=$_POST['name'];
$email=$_POST['email'];
$message=$_POST['message'];
$photo=$_POST['photo'];


$to ="pashka.mozil13@gmail.com";
$subject = "Wiadomosc ze strony fine-art.net.pl";
$message = "<br />
Imię: ".htmlspecialchars($name)."<br />
Email: ".htmlspecialchars($email)."<br /><br />
Wiadomość:<br /> ".htmlspecialchars($message);
$headers = "Form: kontakt@moziltest.cba.pl <no-reply@realtypoland.com> \r\nContent-type: text/html; charset=utf-8\r\n";
mail($to, $subject, $message, $headers);
header('Location: thankyou.html');
exit;
?>
