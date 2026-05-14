function Profile() {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const hasOrder =
    localStorage.getItem("hasOrder");

  // CANCEL ORDER
  const cancelOrder = () => {

    localStorage.removeItem("hasOrder");

    alert("Order Cancelled ❌");

    window.location.reload();
  };

  return (

    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#f8f5f0] via-[#f3ede3] to-[#ece5da] p-10">

      {/* FLOATING BLOBS */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-orange-300 opacity-20 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-200 opacity-20 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-200 opacity-10 rounded-full blur-3xl"></div>

      {/* PROFILE CARD */}
      <div className="relative z-10 max-w-2xl mx-auto backdrop-blur-xl bg-white/40 border border-white/30 rounded-[40px] shadow-2xl p-10">

        <h1 className="text-5xl font-bold mb-8 text-gray-800">
          Profile 👤
        </h1>

        {/* USER INFO */}
        <div className="space-y-5">

          <div className="bg-white/40 p-5 rounded-2xl shadow-md">

            <p className="text-xl text-gray-700">

              <span className="font-bold">
                Name:
              </span>{" "}

              {user?.name}

            </p>

          </div>

          <div className="bg-white/40 p-5 rounded-2xl shadow-md">

            <p className="text-xl text-gray-700">

              <span className="font-bold">
                Email:
              </span>{" "}

              {user?.email}

            </p>

          </div>

        </div>

        {/* ORDER STATUS */}
        <div className="mt-10">

          {hasOrder === "true" ? (

            <div className="bg-orange-100/70 border border-orange-300 backdrop-blur-md p-6 rounded-3xl shadow-lg">

              <h2 className="text-3xl font-bold text-orange-600">
                🚚 Order is on the way!
              </h2>

              <p className="mt-3 text-gray-700 text-lg">
                Your delicious food will arrive soon.
              </p>

              {/* CANCEL BUTTON */}
              <button
                onClick={cancelOrder}
                className="mt-6 bg-red-500 text-white px-6 py-3 rounded-2xl hover:bg-red-600 transition"
              >
                Cancel Order
              </button>

            </div>

          ) : (

            <div className="bg-white/40 border border-white/30 backdrop-blur-md p-6 rounded-3xl shadow-lg">

              <h2 className="text-3xl font-bold text-gray-700">
                No Orders Yet 🍽️
              </h2>

              <p className="mt-3 text-gray-600 text-lg">
                Start exploring delicious food on Essen.
              </p>

            </div>

          )}

        </div>

        {/* GO BACK BUTTON */}
        <div className="mt-10 flex justify-center">

          <button
            onClick={() =>
              window.location.href = "/home"
            }
            className="bg-black text-white px-8 py-3 rounded-2xl text-lg hover:bg-gray-800 transition"
          >
            ⬅ Go Back to Home
          </button>

        </div>

      </div>

    </div>
  );
}

export default Profile;