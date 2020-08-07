<?php
	$nombre = $_POST['nombre'];
	$mail = $_POST['mail'];
	$telefono = $_POST['telefono'];
	$comentario = $_POST['comentario'];
	
	
	$header .= 'From: ' . $mail . " \r\n";
	$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
	$header .= "Mime-Version: 1.0 \r\n";
	$header .= "Content-Type: text/html";
	
	$mensaje = "Mensaje enviado desde Firmacar por "  . $nombre . "  <br>";
	
	$mensaje .= "Su correo es: " . $mail ." <br>";
	$mensaje .= "Su tel&eacute;fono es: " . $telefono ." <br>";
	$mensaje .= "Mensaje: <h3> " . $_POST['comentario'] ." </h3><br>";
	$mensaje .= "Enviado el " . date('d/m/Y', time());
	
	//$para = 'contacto@firmacar.com, tvargas@firmacar.com' ;
	$para = 'julloa@firmacar.com';
	$asunto = 'Contacto Firmacar';
	
	mail($para, $asunto, utf8_decode($mensaje), $header);
	
	echo "<center><h4>Gracias por tu comentario.</h4>
                                    <i class='icon-smile icon-4x'></i></center>"; 
	
	?>
	