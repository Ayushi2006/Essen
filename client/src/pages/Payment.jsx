import { useState } from "react";

function Payment() {

  const [method, setMethod] = useState("UPI");

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  // FAKE PAYMENT
  const handlePayment = () => {

    setLoading(true);

    // FAKE PROCESSING
    setTimeout(() => {

      setLoading(false);

      setSuccess(true);

      // SAVE ORDER STATUS
      localStorage.setItem(
        "hasOrder",
        "true"
      );

      // REDIRECT TO PROFILE
      setTimeout(() => {

        window.location.href = "/profile";

      }, 2200);

    }, 2500);
  };

  // SUCCESS SCREEN
  if (success) {

    return (

      <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-[#f8f5f0] via-[#f3ede3] to-[#ece5da]">

        <div className="bg-white/40 backdrop-blur-xl p-12 rounded-[40px] shadow-2xl text-center border border-white/30">

          {/* GREEN TICK */}
          <div className="w-24 h-24 rounded-full bg-green-500 flex justify-center items-center mx-auto animate-bounce">

            <span className="text-white text-5xl">
              ✓
            </span>

          </div>

          <h1 className="text-4xl font-bold mt-8 text-green-600">
            Payment Successful
          </h1>

          <p className="mt-4 text-gray-700 text-lg">
            Your delicious order is being prepared 🍽️
          </p>

        </div>

      </div>
    );
  }

  return (

    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#f8f5f0] via-[#f3ede3] to-[#ece5da] flex justify-center items-center p-6">

      {/* BLOBS */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-orange-300 opacity-20 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-200 opacity-20 rounded-full blur-3xl animate-pulse"></div>

      {/* CARD */}
      <div className="relative z-10 w-full max-w-lg backdrop-blur-xl bg-white/40 border border-white/30 rounded-[40px] shadow-2xl p-10">

        <h1 className="text-5xl font-bold text-center text-gray-800 mb-8">
          Payment 💳
        </h1>

        {/* PAYMENT METHOD */}
        <div className="mb-6">

          <label className="block mb-3 text-lg font-semibold text-gray-700">
            Select Payment Method
          </label>

          <select
            value={method}
            onChange={(e) =>
              setMethod(e.target.value)
            }
            className="w-full p-4 rounded-2xl border border-gray-300 outline-none bg-white/70"
          >

            <option>UPI</option>

            <option>Google Pay</option>

            <option>PhonePe</option>

            <option>Paytm</option>

            <option>Credit Card</option>

            <option>Debit Card</option>

            <option>Cash on Delivery</option>

          </select>

        </div>

        {/* QR */}
        {(method === "UPI" ||
          method === "Google Pay" ||
          method === "PhonePe" ||
          method === "Paytm") && (

          <div className="flex flex-col items-center mb-8">

            <div className="bg-white p-4 rounded-2xl shadow-lg">

              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=essen-payment"
                alt="QR"
                className="rounded-xl"
              />

            </div>

            <p className="mt-4 text-gray-700 font-medium">
              Scan QR to Pay
            </p>

          </div>

        )}

        {/* CARD DETAILS */}
        {(method === "Credit Card" ||
          method === "Debit Card") && (

          <div className="space-y-4 mb-8">

            <input
              type="text"
              placeholder="Card Number"
              className="w-full p-4 rounded-2xl border border-gray-300 outline-none bg-white/70"
            />

            <div className="flex gap-4">

              <input
                type="text"
                placeholder="MM/YY"
                className="w-1/2 p-4 rounded-2xl border border-gray-300 outline-none bg-white/70"
              />

              <input
                type="text"
                placeholder="CVV"
                className="w-1/2 p-4 rounded-2xl border border-gray-300 outline-none bg-white/70"
              />

            </div>

          </div>

        )}

        {/* COD */}
        {method === "Cash on Delivery" && (

          <div className="bg-orange-100 border border-orange-300 p-5 rounded-2xl mb-8">

            <p className="text-lg text-gray-700">
              Pay cash when your order arrives 🚚
            </p>

          </div>

        )}

        {/* BUTTON */}
        <button
          onClick={handlePayment}
          disabled={loading}
          className="w-full bg-black text-white py-4 rounded-2xl text-xl hover:bg-gray-800 transition flex justify-center items-center gap-3"
        >

          {loading ? (

            <>

              {/* SPINNER */}
              <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>

              <span>
                Processing Payment...
              </span>

            </>

          ) : (

            "Proceed to Pay"

          )}

        </button>

      </div>

    </div>
  );
}

export default Payment;