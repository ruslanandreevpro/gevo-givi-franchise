<?

$name = htmlspecialchars($_POST['name'], ENT_NOQUOTES, 'UTF-8');
$phone = htmlspecialchars($_POST['tel'], ENT_NOQUOTES, 'UTF-8');
$email = htmlspecialchars($_POST['email'],ENT_NOQUOTES,'UTF-8');

$refferer = getenv('HTTP_REFERER');
$date=date("d.m.y"); // число.месяц.год  
$time=date("H:i"); // часы:минуты:секунды 
$myemail = "sprut1980@gmail.com";

$tema = "Новая заявка";
$message_to_myemail = "Поступила новая заявка:
<br><br>
Имя: $name<br>
E-mail: $email<br>
Телефон: $phone<br>
";

mail($myemail, $tema, $message_to_myemail, "From: Gevo-Givi <info@gevogivi.ru> \r\n Reply-To: Gevo-Givi \r\n"."MIME-Version: 1.0\r\n"."Content-type: text/html; charset=utf-8\r\n" );

header("Location: thanks.html");
?>