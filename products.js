document.addEventListener('DOMContentLoaded', () => {
    fetch('http://your-server-address:3000/api/products')
        .then(response => response.json())
        .then(products => {
            const productList = document.getElementById('productList');
            products.forEach(product => {
                const productItem = document.createElement('li');
                productItem.classList.add('product-item');
                productItem.innerHTML = `
                    <h2>${product.name}</h2>
                    <p>Category: ${product.category}</p>
                    <p>Price: $${product.price.toFixed(2)}</p>
                    <p>${product.description}</p>
                `;
                productList.appendChild(productItem);
            });
        })
        .catch(error => console.error('Error fetching products:', error));
});
