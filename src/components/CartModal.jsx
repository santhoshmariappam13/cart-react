const CartModal = ({ cartItems, onClose, removeFromCart }) => {
    const handleBuyNow = (item) => {
        alert(`Product Details:\n\nTitle: ${item.title}\nPrice: $${item.price}`);
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-lg w-11/12 max-w-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Your Cart</h2>
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-600">No items in cart.</p>
          ) : (
            <div className="space-y-4">
              {cartItems.map(item => (
                <div
                  key={item.id}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <span className="w-2/3 truncate text-gray-700">{item.title}</span>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => handleBuyNow(item)}
                      className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                    >
                      Buy Now
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-600 font-semibold hover:text-red-800 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
          <button
            onClick={onClose}
            className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-full w-full font-semibold hover:bg-blue-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    );
  };
  
  export default CartModal;