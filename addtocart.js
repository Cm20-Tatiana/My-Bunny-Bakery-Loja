const products = [
    {
        id: 1,
        image: 'imgs/product1.png',
        name: 'Hayberry Delights',
        type: 'feno',
        price: 6,
        info: '<h2>Hayberry Delights</h2><p>Combinação única de feno nutritivo (Timóteo e bio), banana, framboesas e calêndula.</p><p><strong>INGREDIENTES:</strong><br>• Feno Timóteo/bio<br>• Banana<br>• Framboesas<br>• Calêndula</p><p>Adequado para coelhos e porquinhos da Índia.</p><p><strong>NOTA IMPORTANTE:</strong><br>Seguro para coelhos, mas ofereça em pequenas quantidades e não diariamente. Evite para coelhos com menos de 2 meses. Moderado para coelhos com menos de 6 meses.</p><p><strong>RECOMENDADO usar dentro de 6 meses.</strong> Para animais de estimação saudáveis como petisco, não substitui refeições.</p><p><strong>USO:</strong><br>Coelhos têm estômagos sensíveis; introduza novos alimentos gradualmente.</p><p><strong>ARMAZENAMENTO:</strong><br>Recipiente fechado em local fresco e seco.</p><p><strong>PACOTE</strong><br>Preço: 6,00 incluí 2 unidades.</p>'
    },
    {
        id: 2,
        image: 'imgs/product2.png',
        name: 'Blossom Spinach',
        type: 'aveia',
        price: 5,
        info: '<h2>Blossom Spinach</h2><p>As nossas bolachas crocantes feitas de Espinafre Bio e Aveia Bio são uma opção fantástica. Criadas com cuidado e dedicação para proporcionar ao seu coelho uma experiência de sabor extraordinária. Feitas com ingredientes seguros e de alta qualidade.</p><p><strong>INGREDIENTES:</strong><br>• Espinafres Bio<br>• Aveia Bio</p><p><strong>INSTRUÇÕES DE USO:</strong><br>Adequado para coelhos com mais de 2 meses de idade. Coelhos com menos de 6 meses devem receber com moderação. Introduza novas guloseimas lentamente e em pequenas quantidades devido aos estômagos sensíveis dos coelhos.</p><p><strong>RECOMENDAÇÕES:</strong><br>Utilize dentro de 6 meses. Destinado a animais de estimação saudáveis como um petisco, não como substituto de refeições.</p><p><strong>ARMAZENAMENTO:</strong><br>Armazenar em recipiente fechado e hermético em local fresco e seco.</p><p><strong>PACOTE</strong><br>Preço: 5,50 incluí 1 unidade.</p>'
    },
    {
        id: 3,
        image: 'imgs/product3.jpg',
        name: 'Raspberry Munchies',
        type: 'aveia',
        price: 4.60,
        info: '<h2>Raspberry Munchies</h2><p>Raspberry Munchies são bolachas crocantes com sabor a framboesa e aveia biológica em formato de abelha. Ideal para recompensar o comportamento adorável do seu coelhinho, feitas com ingredientes naturais de alta qualidade.</p><p><strong>INGREDIENTES:</strong><br>• Framboesas<br>• Aveia Biológica</p><p><strong>NOTA IMPORTANTE:</strong><br>Guloseimas seguras para coelhos, mas com alto teor de açúcar devido ao suco de frutas. Ofereça em pequenas quantidades e não diariamente. Não recomendado para coelhos com menos de 2 meses; moderação para coelhos abaixo de 6 meses. Introduza novas guloseimas lentamente devido à sensibilidade dos estômagos dos coelhos.</p><p><strong>RECOMENDAÇÕES:</strong><br>Utilizar dentro de 6 meses. Destinado a animais de estimação saudáveis como petisco, não substituto de refeições.</p><p><strong>USO:</strong><br>Evite excesso de açúcar ao oferecer junto com outras guloseimas açucaradas. Introduza gradualmente em pequenas quantidades.</p><p><strong>ARMAZENAMENTO:</strong><br>Armazenar em local fresco, seco e hermético.</p><p><strong>PACOTE:</strong><br>Cada pacote contém 10 bolachas em formato de abelha.</p><p>Preço: 4,60 por 10 unidades.</p>'
    },
    {
        id: 4,
        image: 'imgs/product4.png',
        name: 'BananaBee Cookies',
        type: 'aveia',
        price: 4.60,
        info: '<h2>BananaBee Cookies</h2><p>Bolachas em formato de abelha feitas com banana e aveia biológica, ideal para recompensar o comportamento adorável do seu coelhinho.</p><p><strong>INGREDIENTES:</strong><br>• Banana<br>• Aveia Biológica</p><p><strong>NOTA IMPORTANTE:</strong><br>Seguras para coelhos, ofereça em pequenas quantidades e não diariamente. Não recomendado para coelhos com menos de 2 meses; moderação para coelhos abaixo de 6 meses. Introduza novas guloseimas lentamente devido à sensibilidade dos estômagos dos coelhos.</p><p><strong>RECOMENDAÇÕES:</strong><br>Utilizar dentro de 6 meses. Destinado a animais de estimação saudáveis como petisco, não substituto de refeições. Evite excesso de açúcar ao oferecer junto com outras guloseimas açucaradas. Introduza gradualmente em pequenas quantidades.</p><p><strong>ARMAZENAMENTO:</strong><br>Armazenar em recipiente fechado e hermético em local fresco e seco.</p><p><strong>PACOTE</strong><br>Preço: 4,60 incluí 10 unidades.</p>'
    },
    {
        id: 5,
        image: 'imgs/product5.png',
        name: 'Mini Heart Bites',
        type: 'aveia',
        price: 5,
        info: '<h2>Mini Heart Bites</h2><p>Mini Heart Bites são bolachas feitas com aveia, banana e folhas de framboesa, criadas para alegrar o dia do seu coelhinho com uma delícia saudável e fofa.</p><p><strong>INGREDIENTES:</strong><br>• Aveia<br>• Banana<br>• Folhas de Framboesa</p><p><strong>NOTA IMPORTANTE:</strong><br>Seguras para coelhos, ofereça em pequenas quantidades e não diariamente. Não recomendado para coelhos com menos de 2 meses; moderação para coelhos abaixo de 6 meses. Introduza novas guloseimas lentamente devido à sensibilidade dos estômagos dos coelhos.</p><p><strong>RECOMENDAÇÕES:</strong><br>Utilizar dentro de 6 meses. Destinado a animais de estimação saudáveis como petisco, não substituto de refeições. Evite excesso de açúcar ao oferecer junto com outras guloseimas açucaradas. Introduza gradualmente em pequenas quantidades.</p><p><strong>ARMAZENAMENTO:</strong><br>Armazenar em recipiente fechado e hermético em local fresco e seco.</p><p><strong>PACOTE</strong><br>Preço: 5,00 por 80g</p>'
    },
    {
        id: 6,
        image: 'imgs/product6.png',
        name: 'Rose Raspberry Ice Cream',
        type: 'feno',
        price: 5,
        info: '<h2>Rose Raspberry Ice Cream</h2><p>Nosso gelado natural combina feno de Timóteo bio, framboesas e rosas para proporcionar benefícios à saúde do seu coelhinho. Cada trinca é uma iguaria refrescante e nutritiva que encantará o paladar do seu coelho.</p><p><strong>INGREDIENTES:</strong><br>• Feno (Timóteo bio)<br>• Framboesa<br>• Rosas</p><p><strong>NOTA IMPORTANTE:</strong><br>Gelado seguro para coelhos, ofereça em pequenas quantidades e ocasionalmente. Contém ervas e frutas benéficas, mas introduza na dieta com moderação devido à sensibilidade dos estômagos dos coelhos.</p><p><strong>RECOMENDAÇÕES:</strong><br>Utilizar dentro de 6 meses. Destinado a animais de estimação saudáveis como um petisco ocasional e refrescante, não substituto de refeições. Ofereça uma pequena porção como mimo refrescante. Evite excessos, especialmente após consumo de outras guloseimas. Controle a quantidade de açúcar oferecida.</p><p><strong>ARMAZENAMENTO:</strong><br>Armazenar em local fresco e seco.</p><p><strong>PACOTE</strong><br>Preço: 5,00 por unidade</p>'
    },
    { id: 7, 
        image: 'imgs/product7.png',
        name: 'Corneto de Calêndula', 
        type: 'feno', 
        price: 5,
        info:'<h2>Corneto de Calêndula</h2><p>Nosso Corneto de Calêndula é rico em fibras, vitaminas e minerais essenciais para uma dieta equilibrada. Combina feno Timóteo bio com a saborosa banana, proporcionando uma experiência única de sabor e nutrição para o seu coelhinho.</p><p><strong>INGREDIENTES:</strong><br>• Feno Timóteo bio<br>• Banana</p><p><strong>NOTA IMPORTANTE:</strong><br>Corneto seguro para coelhos, ofereça em pequenas quantidades e ocasionalmente. Contém ingredientes benéficos, mas introduza na dieta com moderação devido à sensibilidade dos estômagos dos coelhos.</p><p><strong>RECOMENDAÇÕES:</strong><br>Utilizar dentro de 6 meses. Destinado a animais de estimação saudáveis como um petisco ocasional e nutritivo, não substituto de refeições. Ofereça como um mimo especial. Evite excessos, especialmente após consumo de outras guloseimas. Controle a quantidade de açúcar oferecida.</p><p><strong>ARMAZENAMENTO:</strong><br>Armazenar em local fresco e seco.</p><p><strong>PACOTE</strong><br>Preço: 5,00 por unidade</p>' 
    },
    { id: 8, 
        image: 'imgs/product8.png', 
        name: 'Bolachas de Morango com Aveia', 
        type: 'aveia', 
        price: 5.50,
        info: '<h2>Bolachas de Morango com Aveia</h2><p>Apresentamos as Bolachas de Morango com Aveia - petiscos crocantes que combinam o doce sabor do morango com a nutrição da aveia biológica. São o miminho perfeito para recompensar o comportamento adorável do seu coelhinho, oferecendo energia e diversão.</p><p><strong>INGREDIENTES:</strong><br>• Aveia biológica<br>• Morango</p><p><strong>NOTA IMPORTANTE:</strong><br>Bolachas seguras para coelhos, ofereça em pequenas quantidades e ocasionalmente. Contêm ingredientes benéficos, mas introduza na dieta com moderação devido à sensibilidade dos estômagos dos coelhos.</p><p><strong>RECOMENDAÇÕES:</strong><br>Utilizar dentro de 6 meses. Destinado a animais de estimação saudáveis como um petisco ocasional e nutritivo, não substituto de refeições. Evite excessos, especialmente após consumo de outras guloseimas. Controle a quantidade de açúcar oferecida.</p><p><strong>ARMAZENAMENTO:</strong><br>Armazenar em local fresco e seco.</p><p><strong>PACOTE</strong><br>Preço: 5,50 por 80g</p>'
    },
    { id: 9, 
        image: 'imgs/product9.jpg', 
        name: 'Bolo de Aniversário para Coelhos', 
        type: 'aveia', 
        price: 18 },

    { id: 10, 
        image: 'imgs/product10.png', 
        name: 'Crispy Carrots biscuits with camomile', 
        type: 'aveia', 
        price: 12,
        info: '<h2>Crispy Carrots biscuits with camomile</h2><p>Mime o seu coelhinho com um petisco delicioso e saudável!</p><p><strong>Descrição:</strong><br>Apresentamos as Bolachas de Cenoura, Aveia Bio e Camomila - petiscos crocantes que combinam a suavidade da aveia Bio, a nutrição da cenoura e o toque calmante da camomila. Estas bolachinhas são o miminho perfeito para recompensar o comportamento adorável do seu coelhinho.</p><p><strong>Ingredientes:</strong><br>• Cenoura<br>• Aveia Bio<br>• Camomila</p><p><strong>Nota Importante:</strong><br>Estas bolachas são seguras para dar aos coelhos, mas devem ser oferecidas em pequenas quantidades e de forma ocasional. Contêm ingredientes benéficos para a saúde dos coelhos; introduza novos alimentos na dieta com moderação, devido à sensibilidade dos estômagos dos coelhos.</p><p><strong>Recomendações:</strong><br>Utilizar dentro de 6 meses. Destinado a animais de estimação saudáveis como um petisco ocasional e nutritivo, não substituto de refeições. Evite dar em excesso, especialmente se o seu coelho já consumiu outras guloseimas. Controle a quantidade oferecida devido à sensibilidade dos coelhos a açúcares.</p><p><strong>Armazenamento:</strong><br>Armazenar em local fresco e seco.</p><p><strong>Pacote:</strong><br>Preço: 12 euros por 90 gramas com frasco de vidro hermético</p>'
    }
    ];

    const itemsPerPage = 6;
    let currentPage = 1;
    let filteredProducts = [...products];
    var cart = [];
    
    document.addEventListener('DOMContentLoaded', () => {
        displayProducts();
    });
    
    function displayProducts() {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const paginatedItems = filteredProducts.slice(startIndex, endIndex);
    
        document.getElementById('root').innerHTML = paginatedItems.map((item) => {
            return `
                <div class='box'>
                    <div class='img-box'>
                        <img class='images' src=${item.image} alt="${item.name}">
                    </div>
                    <div class='bottom'>
                        <p>${item.name}</p>
                        <h2>${item.price.toFixed(2)} €</h2>
                        <button onclick='showOverlay("${item.image}", \`${item.info}\`)' >Mais Informação</button>
                        <button onclick='addToCart(${item.id})'>Adiciona ao Carrinho</button>
                    </div>
                </div>
            `;
        }).join('');
    
        // Update the pagination buttons visibility
        document.querySelector('.pagination').style.display = filteredProducts.length > itemsPerPage ? 'flex' : 'none';
    }
    
    function showOverlay(imageSrc, info) {
        const overlay = document.getElementById('overlay');
        const overlayImage = document.getElementById('overlay-image');
        const overlayText = document.getElementById('overlay-text');
    
        overlayImage.src = imageSrc;
        overlayText.innerHTML = info;
    
        overlay.style.display = 'flex';
    }
    
    
    function closeOverlay() {
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
    }
    
    function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        displayProducts();
        scrollToTop();
    }
}

function nextPage() {
    if (currentPage * itemsPerPage < filteredProducts.length) {
        currentPage++;
        displayProducts();
        scrollToTop();
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'  // animação suave
    });
}

    function addToCart(id) {
        const item = products.find(product => product.id === id);
        cart.push({ ...item });
        displayCart();
    }
    
    function delElement(index) {
        cart.splice(index, 1);
        displayCart();
    }
    
    function displayCart() {
        let total = 0;
        document.getElementById('count').innerText = cart.length;
    
        if (cart.length === 0) {
            document.getElementById('cartItem').innerHTML = 'O seu carrinho está vazio';
            document.getElementById('total').innerText = '€ 0.00';
        } else {
            document.getElementById('cartItem').innerHTML = cart.map((item, index) => {
                total += item.price;
                return `
                    <div class='cart-item'>
                        <div class='row-img'>
                            <img class='rowimg' src=${item.image} alt="${item.name}">
                        </div>
                        <p>${item.name}</p>
                        <h2>${item.price.toFixed(2)} €</h2> 
                        <i class='fa-solid fa-trash' onclick='delElement(${index})'></i>
                    </div>
                `;
            }).join('');
            document.getElementById('total').innerText = `${total.toFixed(2)} €`; // Colocado o € após o valor total
        }
    }
    
    
    function searchProducts() {
        const searchTerm = document.getElementById('search').value.toLowerCase();
        filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm)
        );
        currentPage = 1;
        displayProducts();
    }
    
    function sortProducts() {
        const sortOption = document.getElementById('sort').value;
        if (sortOption === 'asc') {
            filteredProducts.sort((a, b) => a.price - b.price);
        } else if (sortOption === 'desc') {
            filteredProducts.sort((a, b) => b.price - a.price);
        } else if (sortOption === 'feno') {
            filteredProducts = products.filter(product => product.type === 'feno');
        } else if (sortOption === 'aveia') {
            filteredProducts = products.filter(product => product.type === 'aveia');
        } else {
            filteredProducts = [...products];
        }
        currentPage = 1;
        displayProducts();
    }
    