function Navbar({

  cartCount,

  isLoggedIn,

  setIsLoggedIn,

  setShowCart,

}) {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const handleLogout = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    localStorage.removeItem("hasOrder");

    setIsLoggedIn(false);

    window.location.href = "/";
  };

  return (

    <div className="sticky top-0 z-50 backdrop-blur-xl bg-white/40 border-b border-white/30 shadow-lg px-8 py-5 flex justify-between items-center">

      {/* LOGO */}
      <h1 className="text-4xl font-bold tracking-wide text-gray-800">
        Essen 🍽️
      </h1>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-6">

        {/* PROFILE */}
        {isLoggedIn && (

          <button
            onClick={() =>
              window.location.href = "/profile"
            }
            className="text-lg font-semibold hover:text-orange-500"
          >
            👤 Profile
          </button>

        )}

        {/* LOGIN */}
        {!isLoggedIn ? (

          <button
            onClick={() =>
              window.location.href = "/"
            }
            className="bg-black text-white px-5 py-2 rounded-xl hover:bg-gray-800"
          >
            Login
          </button>

        ) : (

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-5 py-2 rounded-xl hover:bg-red-600"
          >
            Logout
          </button>

        )}

        {/* CART */}
        <button
          onClick={() => setShowCart(true)}
          className="text-xl font-semibold hover:text-orange-500"
        >
          🛒 ({cartCount})
        </button>

      </div>

    </div>
  );
}

export default Navbar;