<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minha Loja - Carrinho</title>
    <link rel="stylesheet" href="styles.css"> <!-- Verifique o caminho conforme necessário -->
    <style>
        /* Estilos CSS opcionais para o carrinho */
    </style>
</head>
<body>

<div id="cart-contents">
    <?php
    session_start(); // Inicia a sessão para manter o carrinho entre as páginas

    if (isset($_SESSION['cart']) && !empty($_SESSION['cart'])) {
        $cart = $_SESSION['cart'];
        $total = 0;
        echo '<h2>Seu Carrinho</h2>';
        echo '<div id="cart-contents">';
        echo '<h3>Produtos no Carrinho:</h3>';
        
        foreach ($cart as $product) {
            echo '<p>' . htmlspecialchars($product['name']) . ' - Preço: ' . $product['price'] . '€</p>';
            $total += $product['price']; // Acumula o preço de cada produto ao total
        }
        
        echo '<p>Total: ' . $total . '€</p>';
        echo '</div>';
    } else {
        echo '<h2>Seu carrinho está vazio!</h2>';
    }
    ?>
</div>

</body>
</html>
