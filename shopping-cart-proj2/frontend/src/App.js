import React from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Shopping Cart</h1>
      <ProductForm />
      <ProductList />
    </div>
  );
}

export default App;
