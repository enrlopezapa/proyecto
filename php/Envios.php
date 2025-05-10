<?php
//Con PHPMailer se envian los correos
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
class Envios
{
    //Esta funcion pasandole los parametros asunto, mensaje y destinatario envia el correo
    public function enviarMail($asunto, $mensaje, $destinatario)
    {
        $mail = new PHPMailer(true); // Crear una instancia de PHPMailer

        try {
            $mail = new PHPMailer(true);
            $mail->IsSMTP();
            $mail->SMTPAuth = true;
            $mail->Host = "smtp.ionos.es";
            $mail->Port = 587;
            $mail->Username = "administracion@wallafood.es";
            $mail->Password = "3nr1qu3C0rr30W4ll4f00d!";
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->SetFrom('administracion@wallafood.es', 'Adimistracion Wallafood');
            $mail->addAddress($destinatario, 'Destino');
            $mail->CharSet = 'UTF-8';
            $mail->isHTML(true);
            $mail->Subject = $asunto;
            $mail->Body = $mensaje;
            $mail->Send();
        } catch (Exception $ex) {
            echo "Error detectado: " . $ex;
        }
    }
}