import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function Home() {

  const [foods, setFoods] = useState([]);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {

    fetchFoods();

    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
    }

  }, []);

  // FETCH FOODS
  const fetchFoods = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/foods"
      );
      setFoods(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // ADD TO CART
  const addToCart = (food) => {
    setCart((prevCart) => {
      const existing = prevCart.find(
        (item) => item._id === food._id
      );

      if (existing) {
        return prevCart.map((item) =>
          item._id === food._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...food, quantity: 1 }];
    });
  };

  // REMOVE FROM CART
  const removeFromCart = (food) => {
    setCart((prevCart) => {
      const existing = prevCart.find(
        (item) => item._id === food._id
      );

      if (!existing) return prevCart;

      if (existing.quantity === 1) {
        return prevCart.filter(
          (item) => item._id !== food._id
        );
      }

      return prevCart.map((item) =>
        item._id === food._id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    });
  };

  const cartCount = cart.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (acc, item) =>
      acc + item.price * item.quantity,
    0
  );

  const filteredFoods = foods.filter(
    (food) =>
      food.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      food.category
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  const handlePayment = async () => {

    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first!");
      window.location.href = "/";
      return;
    }

    if (cart.length === 0) {
      alert("Cart is empty!");
      return;
    }

    try {
      await axios.post(
        "http://localhost:5000/api/orders",
        {
          items: cart,
          total: totalPrice,
        }
      );

      window.location.href = "/payment";

    } catch (error) {
      console.log(error);
    }
  };

  return (

    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#f8f5f0] via-[#f3ede3] to-[#ece5da]">

      {/* BACKGROUND BLOBS */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-orange-300 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-200 opacity-20 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative z-10">

        <Navbar
          cartCount={cartCount}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          setShowCart={setShowCart}
        />

        {/* SEARCH */}
        <div className="p-6 flex justify-center">
          <input
            type="text"
            placeholder="Search food..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md p-4 rounded-2xl border outline-none bg-white/70 backdrop-blur-md"
          />
        </div>

        {/* FOOD CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-6">

          {filteredFoods.map((food) => (

            <div
              key={food._id}
              className="
                bg-white/40
                backdrop-blur-xl
                border border-white/30
                rounded-[30px]
                overflow-hidden
                shadow-xl
                transition-all
                duration-300
                hover:scale-105
                hover:-translate-y-2
                hover:shadow-2xl
              "
            >

              <img
                src={food.image}
                alt={food.name}
                className="w-full h-56 object-cover"
              />

              <div className="p-5">

                <h2 className="text-2xl font-bold text-gray-800">
                  {food.name}
                </h2>

                <p className="text-gray-500 mt-1">
                  {food.category}
                </p>

                <div className="flex justify-between items-center mt-5">

                  <p className="text-xl font-semibold text-orange-500">
                    ₹{food.price}
                  </p>

                  <button
                    onClick={() => addToCart(food)}
                    className="bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800"
                  >
                    Add to Cart
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>
      </div>

      {/* CART SIDEBAR */}
      {showCart && (

        <div className="fixed top-0 right-0 h-full w-[420px] bg-white shadow-2xl z-50 p-6 overflow-y-auto">

          <div className="flex justify-between items-center mb-6">

            <h2 className="text-3xl font-bold">
              Your Cart
            </h2>

            <button
              onClick={() => setShowCart(false)}
              className="text-4xl"
            >
              ×
            </button>

          </div>

          {cart.length === 0 ? (

            <p>No items in cart.</p>

          ) : (

            <div>

              {cart.map((item) => (

                <div
                  key={item._id}
                  className="flex justify-between items-center border-b py-4"
                >

                  <div>
                    <h3 className="font-semibold text-lg">
                      {item.name}
                    </h3>

                    <p>
                      ₹{item.price} x {item.quantity}
                    </p>

                    <p className="font-bold text-orange-500">
                      ₹{item.price * item.quantity}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">

                    <button
                      onClick={() => removeFromCart(item)}
                      className="bg-red-500 text-white w-8 h-8 rounded-full"
                    >
                      -
                    </button>

                    <span className="text-lg font-bold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => addToCart(item)}
                      className="bg-green-500 text-white w-8 h-8 rounded-full"
                    >
                      +
                    </button>

                  </div>

                </div>

              ))}

              <div className="mt-6">

                <h3 className="text-2xl font-bold mb-5">
                  Total: ₹{totalPrice}
                </h3>

                <button
                  onClick={handlePayment}
                  className="w-full bg-orange-500 text-white py-4 rounded-2xl text-xl hover:bg-orange-600"
                >
                  Buy Now
                </button>

              </div>

            </div>

          )}

        </div>

      )}

    </div>
  );
}

export default Home;