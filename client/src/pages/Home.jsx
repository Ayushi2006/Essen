import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; 
import { motion } from "framer-motion";

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

      return [
        ...prevCart,
        { ...food, quantity: 1 }
      ];
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

  // CART COUNT
  const cartCount = cart.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  // TOTAL PRICE
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // SEARCH FILTER
  const filteredFoods = foods.filter(
    (food) =>
      food.name.toLowerCase().includes(search.toLowerCase()) ||
      food.category.toLowerCase().includes(search.toLowerCase())
  );

  // PAYMENT
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

  // SCROLL TO MENU
  const scrollToMenu = () => {

    const section = document.getElementById("menu-section");

    if (section) {

      section.scrollIntoView({
        behavior: "smooth",
      });

    }
  };

  return (

    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#f8f5f0] via-[#f3ede3] to-[#ece5da] flex flex-col">

      {/* BACKGROUND BLOBS */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-orange-300 opacity-20 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-200 opacity-20 rounded-full blur-3xl animate-pulse"></div>

      {/* MAIN */}
      <div className="relative z-10 flex-1">

        {/* NAVBAR */}
        <Navbar
          cartCount={cartCount}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          setShowCart={setShowCart}
        />

        {/* HERO SECTION */}
        <div className="relative overflow-hidden px-6 md:px-20 py-24">

          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >

              <h1 className="text-6xl md:text-7xl font-black leading-tight text-gray-800">

                Delicious Food

                <span className="text-orange-500">
                  {" "}Delivered Fast
                </span>

              </h1>

              <p className="mt-6 text-xl text-gray-600 leading-relaxed">

                Experience luxury food delivery and blazing fast ordering.

              </p>

              {/* EXPLORE BUTTON */}
              <button
                onClick={scrollToMenu}
                className="mt-8 bg-black text-white px-8 py-4 rounded-2xl text-lg hover:scale-105 transition shadow-xl"
              >

                Explore Menu 🍽️

              </button>

            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center items-center min-h-[400px]"
            >

              {/* BURGER */}
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
                alt="Burger"
                className="w-44 h-44 object-cover rounded-full absolute top-0 left-10 shadow-2xl animate-bounce"
              />

              {/* PIZZA */}
              <img
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591"
                alt="Pizza"
                className="w-60 h-60 object-cover rounded-full shadow-2xl"
              />

              {/* PASTA */}
              <img
                src="https://images.unsplash.com/photo-1600891964092-4316c288032e"
                alt="Pasta"
                className="w-40 h-40 object-cover rounded-full absolute bottom-0 right-10 shadow-2xl animate-bounce"
              />

            </motion.div>

          </div>

        </div>

        {/* SEARCH */}
        <div className="p-6 flex justify-center">

          <input
            type="text"
            placeholder="Search food..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md p-4 rounded-2xl border outline-none bg-white/70 backdrop-blur-md shadow-sm"
          />

        </div>

        {/* FOOD SECTION */}
        <div
          id="menu-section"
          className="px-6"
        >

          <h2 className="text-5xl font-black text-center text-gray-800 mb-12">

            Our Premium Menu 🍴

          </h2>

          {/* FOOD CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pb-10">

            {filteredFoods.map((food) => (

              <motion.div
                key={food._id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group bg-white/40 backdrop-blur-xl border border-white/30 rounded-[30px] overflow-hidden shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl"
              >

                <img
                  src={food.image}
                  alt={food.name}
                  className="w-full h-56 object-cover group-hover:scale-110 transition duration-700"
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
                      className="bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800 transition"
                    >
                      Add to Cart
                    </button>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

      {/* CART SIDEBAR */}
      {showCart && (

        <>

          {/* BACKDROP */}
          <div
            onClick={() => setShowCart(false)}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          />

          {/* SIDEBAR */}
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

                {/* TOTAL */}
                <div className="mt-6">

                  <h3 className="text-2xl font-bold mb-5">
                    Total: ₹{totalPrice}
                  </h3>

                  <button
                    onClick={handlePayment}
                    className="w-full bg-orange-500 text-white py-4 rounded-2xl text-xl hover:bg-orange-600 transition"
                  >
                    Buy Now
                  </button>

                </div>

              </div>

            )}

          </div>

        </>

      )}

      {/* FOOTER */}
      <Footer />

    </div>
  );
}

export default Home;
