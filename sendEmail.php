<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header('Content-Type: application/json');

// Include PHPMailer files
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

// Check if data was received via POST
$data = json_decode(file_get_contents('php://input'), true);

if (!$data) {
    echo json_encode(['success' => false, 'message' => 'No data received']);
    exit;
}

// Extract data from JSON
$email = $data['email'];
$cartItems = $data['cartItems'];
$total = $data['total'];

// Create a new PHPMailer instance
$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP(); // Set mailer to use SMTP
    $mail->Host = 'smtp.gmail.com'; // Specify main and backup SMTP servers
    $mail->SMTPAuth = true; // Enable SMTP authentication
    $mail->Username = 'mybunnybakerypt@gmail.com'; // SMTP username (your Gmail address)
    $mail->Password = 'your_gmail_password'; // SMTP password (your Gmail password)
    $mail->SMTPSecure = 'tls'; // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 587; // TCP port to connect to

    // Recipients
    $mail->setFrom('mybunnybakerypt@gmail.com', 'MY BUNNY BAKERY');
    $mail->addAddress($email); // Add a recipient

    // Content
    $mail->isHTML(false); // Set email format to HTML
    $mail->Subject = 'Seu Pedido na MY BUNNY BAKERY';

    $message = "Obrigado por seu pedido!\n\n";
    $message .= "Aqui estão os detalhes do seu pedido:\n\n";

    foreach ($cartItems as $item) {
        $message .= $item['name'] . ": " . number_format($item['price'], 2, ',', '.') . " €\n";
    }

    $message .= "\nTotal: " . $total . "\n\n";
    $message .= "Por favor, siga as instruções abaixo para realizar o pagamento.";

    $mail->Body = $message;

    // Send email
    $mail->send();

    echo json_encode(['success' => true]);
} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => $mail->ErrorInfo]);
}
?>
