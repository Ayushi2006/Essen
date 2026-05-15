import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import {
  FaBurger,
  FaMugHot,
  FaRocket,
  FaArrowRight,
} from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function About() {

  const navigate = useNavigate();

  return (

    <div className="min-h-screen bg-gradient-to-br from-[#f8f5f0] via-[#f3ede3] to-[#ece5da] overflow-hidden relative">

      {/* BLOBS */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-orange-300 opacity-20 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-200 opacity-20 rounded-full blur-3xl animate-pulse"></div>

      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <div className="relative z-10 px-6 md:px-20 py-24 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <h1 className="text-6xl md:text-7xl font-black text-gray-800 leading-tight">

            Welcome To

            <span className="text-orange-500">
              {" "}Essen
            </span>

          </h1>

          <p className="mt-8 text-xl text-gray-600 leading-relaxed">

            Essen is an aesthetic luxury café
            designed for people who love delicious food,
            cozy vibes, and beautiful experiences.

            <br /><br />

            Our platform lets users explore premium dishes,
            desserts, and handcrafted beverages with
            elegant UI and seamless ordering.

            <br /><br />

            From gourmet burgers to handcrafted coffee,
            every meal is prepared with warmth,
            elegance, and premium quality.

          </p>

          {/* BUTTON */}
          <button
            onClick={() => navigate("/home")}
            className="mt-10 flex items-center gap-3 bg-black text-white px-8 py-4 rounded-2xl text-lg shadow-xl hover:scale-105 transition"
          >

            Explore Our Menu

            <FaArrowRight />

          </button>

        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center items-center min-h-[500px]"
        >

          {/* IMAGE 1 */}
          <img
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop"
            alt="Cafe"
            className="w-72 h-96 object-cover rounded-[40px] absolute left-0 top-10 shadow-2xl rotate-[-8deg] hover:rotate-0 transition duration-500"
          />

          {/* IMAGE 2 */}
          <img
            src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=1200&auto=format&fit=crop"
            alt="Food"
            className="w-80 h-[450px] object-cover rounded-[40px] shadow-2xl z-10 hover:scale-105 transition duration-500"
          />

          {/* IMAGE 3 */}
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop"
            alt="Interior"
            className="w-64 h-80 object-cover rounded-[40px] absolute right-0 bottom-10 shadow-2xl rotate-[8deg] hover:rotate-0 transition duration-500"
          />

        </motion.div>

      </div>

      {/* WHY ESSEN */}
      <div className="relative z-10 px-6 md:px-20 py-20">

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-black text-center text-gray-800 mb-20"
        >

          Why People Love Essen ❤️

        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">

          {/* CARD 1 */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white/40 backdrop-blur-xl border border-white/30 p-10 rounded-[35px] shadow-2xl"
          >

            <div className="text-6xl text-orange-500 mb-6">
              <FaBurger />
            </div>

            <h3 className="text-3xl font-bold mb-4 text-gray-800">
              Premium Food
            </h3>

            <p className="text-gray-600 leading-relaxed">

              Fresh ingredients, handcrafted meals,
              and premium taste in every bite.

            </p>

          </motion.div>

          {/* CARD 2 */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white/40 backdrop-blur-xl border border-white/30 p-10 rounded-[35px] shadow-2xl"
          >

            <div className="text-6xl text-orange-500 mb-6">
              <FaMugHot />
            </div>

            <h3 className="text-3xl font-bold mb-4 text-gray-800">
              Aesthetic Café
            </h3>

            <p className="text-gray-600 leading-relaxed">

              Warm ambience, luxury interiors,
              and relaxing café vibes for everyone.

            </p>

          </motion.div>

          {/* CARD 3 */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white/40 backdrop-blur-xl border border-white/30 p-10 rounded-[35px] shadow-2xl"
          >

            <div className="text-6xl text-orange-500 mb-6">
              <FaRocket />
            </div>

            <h3 className="text-3xl font-bold mb-4 text-gray-800">
              Fast Delivery
            </h3>

            <p className="text-gray-600 leading-relaxed">

              Order your favorite meals online
              and enjoy quick doorstep delivery.

            </p>

          </motion.div>

        </div>

      </div>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}

export default About;