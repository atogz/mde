<?php

$customerName = $_POST["name"];
$phoneNumber = $_POST["phoneNumber"];
$message = $_POST["message"];

$to = 'md.engineering@mail.ru';
$from = 'no-reply@mdengineering.ru';
$subject = 'Сообщение с сайта mdengineering.ru';
$headers = "From: " . $from . "\r\n";
$headers .= "Reply-To: ". $from . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "cc: webdevatogz@gmail.com";

$message =
	"
			        <html>
			        <head></head>
			        <body>
			            <h3>Новое сообщение с сайта mdengineering.ru.<br/><br/></h3>

			            <p>Имя: $customerName</p>
			            <p>Телефон: $phoneNumber</p>
			            <h4 style='text-decoration: underline'>Сообщение</h4>
			            <p>$message</p>
			        </body>
			        </html>";

if(mail($to, $subject, $message, $headers)) {
	$data["message"] = "Спасибо! Ваша заявка отправлена. В ближайшее время мы с вами свяжемся.";
}
else {
	$data["error"] = error_get_last();
}


echo json_encode($data);

