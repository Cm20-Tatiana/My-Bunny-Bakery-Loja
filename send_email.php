<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer-master/PHPMailer-master/src/Exception.php';
require 'PHPMailer-master/PHPMailer-master/src/PHPMailer.php';
require 'PHPMailer-master/PHPMailer-master/src/SMTP.php';

// Set the path to the CA certificates file
$caCertFile = 'C:\wamp64\www\bunny shop\My-Bunny-Bakery\cacert.pem';


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form fields
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Create a PHPMailer instance
    $mail = new PHPMailer(true); // Passing true enables exceptions

    try {
        // Server settings
$mail->isSMTP();  // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;  // Enable SMTP authentication
$mail->Username = 'mybunnybakerymail@gmail.com';  // SMTP username (your Gmail address)
$mail->Password = 'mybunnybakery.mail2';  // SMTP password (your Gmail password or App Password)
$mail->SMTPSecure = 'tls';  // Enable TLS encryption, 'ssl' also accepted
$mail->SMTPAutoTLS = false;
$mail->Port = 587;  // TCP port to connect to

// Set CA file path
$mail->SMTPOptions = array(
    'ssl' => array(
        'verify_peer' => true,
        'verify_peer_name' => true,
        'allow_self_signed' => false,
        'cafile' => 'C:\wamp64\www\bunny shop\My-Bunny-Bakery\cacert.pem', // Adjust path as needed
    ),
);

    
        // Recipients
        $mail->setFrom('mybunnybakerymail@gmail.com', 'My Bunny Bakery');
        $mail->addAddress('mybunnybakerymail@gmail.com');  // Add a recipient

        // Content
        $mail->isHTML(false);  // Set email format to HTML
        $mail->Subject = "New Contact Us Message from $name";
        $mail->Body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

        // Enable verbose debug output
        $mail->SMTPDebug = 2;
        $mail->Debugoutput = function($str, $level) { echo "debug level $level; message: $str"; };

        // Send email
        $mail->send();
        echo "Thank you! Your message has been sent.";
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
} else {
    echo "Invalid request.";
}
?>
