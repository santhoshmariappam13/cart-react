const Navbar = ({ cartCount, onCartClick }) => {
    return (
      <nav className="bg-blue-600 text-white flex justify-between items-center p-4 shadow-md">
        <h1 className="text-2xl font-bold tracking-wide hover:text-blue-300 transition-colors duration-300">
          Fake Store
        </h1>
        <button
          onClick={onCartClick}
          className="bg-white text-blue-600 px-4 py-2 rounded-full font-semibold shadow hover:bg-blue-100 transition-all duration-300"
        >
          🛒 Cart ({cartCount})
        </button>
      </nav>
    );
  };
  
  export default Navbar;