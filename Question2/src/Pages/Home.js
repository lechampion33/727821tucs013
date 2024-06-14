import React from 'react'


const products = [
    { id: 1, name: 'Product 1', company: 'Company A', category: 'Category X', price: '$100', rating: 4.5, discount: '10%', availability: 'In Stock' },
    { id: 2, name: 'Product 2', company: 'Company B', category: 'Category Y', price: '$200', rating: 4.0, discount: '15%', availability: 'Out of Stock' },
    // Add more products as needed
  ];
function Home() {
    return (
        <div>
          <h1>Product List</h1>
          <ul>
            {products.map(product => (
              <li key={product.id}>
                <Link to={`/product/${product.id}`}>
                  {product.name} - {product.company}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      );
}

export default Home
