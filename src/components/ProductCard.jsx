const ProductCard = ({ product, addToCart }) => {
    return (
      <div className="border rounded-lg p-6 flex flex-col items-center shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
        <img
          src={product.image}
          alt={product.title}
          className="w-40 h-40 object-contain mb-4 rounded"
        />
        <h2 className="text-lg font-semibold text-center text-gray-800 mb-2">
          {product.title}
        </h2>
        <p className="text-xl font-bold text-green-700 mb-4">${product.price}</p>
        <button
          onClick={() => addToCart(product)}
          className="bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition-colors duration-300"
        >
          Add to Cart
        </button>
      </div>
    );
  };
  
  export default ProductCard;