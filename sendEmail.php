<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);

if (!$data) {
    echo json_encode(['success' => false, 'message' => 'No data received']);
    exit;
}

$email = $data['email'];
$cartItems = $data['cartItems'];
$total = $data['total'];

$subject = 'Seu Pedido na MY BUNNY BAKERY';
$message = "Obrigado por seu pedido!\n\n";
$message .= "Aqui estão os detalhes do seu pedido:\n\n";

foreach ($cartItems as $item) {
    $message .= $item['name'] . ": " . number_format($item['price'], 2, ',', '.') . " €\n";
}

$message .= "\nTotal: " . $total . "\n\n";
$message .= "Por favor, siga as instruções abaixo para realizar o pagamento.";

$headers = "From: mybunnybakerypt@gmail.com";

if (mail($email, $subject, $message, $headers)) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'message' => 'Mail function failed']);
}
?>
