import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaXTwitter,
  FaApple,
  FaGooglePlay,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black text-white px-6 md:px-20 py-16 mt-20">
      {/* BACKGROUND BLOBS */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-500 opacity-10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500 opacity-10 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* LOGO */}
          <div>
            <h1 className="text-5xl font-extrabold tracking-wide mb-4">
              Essen
            </h1>

            <p className="text-gray-400 leading-relaxed">
              Delicious food delivered with elegance and speed.
            </p>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="font-semibold text-xl mb-5">Company</h3>

            <ul className="space-y-3 text-gray-400">
              <a
                href="/about"
                className="hover:text-white transition cursor-pointer block"
              >
                About Us
              </a>

              <li className="hover:text-white transition cursor-pointer">
                Careers
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Blog
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Investor Relations
              </li>
            </ul>
          </div>

          {/* RESTAURANTS */}
          <div>
            <h3 className="font-semibold text-xl mb-5">For Restaurants</h3>

            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white transition cursor-pointer">
                Partner With Us
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Restaurant Dashboard
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Business App
              </li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="font-semibold text-xl mb-5">Support</h3>

            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white transition cursor-pointer">
                Help Center
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Terms & Conditions
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Privacy Policy
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Security
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-semibold text-xl mb-5">Contact</h3>

            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <FaLocationDot className="text-orange-400 text-lg" />
                Bengaluru, India
              </li>

              <li className="flex items-center gap-3">
                <FaPhone className="text-green-400 text-lg" />
                +91 97XXXXXXXX
              </li>

              <li className="flex items-center gap-3">
                <FaEnvelope className="text-yellow-400 text-lg" />
                support@essen.com
              </li>
            </ul>
          </div>
        </div>

        {/* SOCIAL + APPS */}
        <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-10">
          {/* SOCIAL */}
          <div>
            <h3 className="font-semibold text-xl mb-4">Follow Us</h3>

            <div className="flex gap-6 text-3xl">
              <FaInstagram className="hover:text-pink-400 hover:scale-110 transition cursor-pointer" />

              <FaFacebook className="hover:text-blue-400 hover:scale-110 transition cursor-pointer" />

              <FaYoutube className="hover:text-red-500 hover:scale-110 transition cursor-pointer" />

              <FaXTwitter className="hover:text-gray-300 hover:scale-110 transition cursor-pointer" />
            </div>
          </div>

          {/* APP BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* APP STORE */}
            <button className="flex items-center gap-3 bg-zinc-900 border border-gray-700 px-6 py-3 rounded-2xl hover:bg-zinc-800 transition shadow-lg hover:scale-105">
              <FaApple className="text-3xl text-white" />

              <div className="text-left">
                <p className="text-xs text-gray-400">Download on the</p>

                <p className="font-semibold text-lg">App Store</p>
              </div>
            </button>

            {/* GOOGLE PLAY */}
            <button className="flex items-center gap-3 bg-zinc-900 border border-gray-700 px-6 py-3 rounded-2xl hover:bg-zinc-800 transition shadow-lg hover:scale-105">
              <FaGooglePlay className="text-3xl text-green-400" />

              <div className="text-left">
                <p className="text-xs text-gray-400">GET IT ON</p>

                <p className="font-semibold text-lg">Google Play</p>
              </div>
            </button>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-gray-800 mt-14 pt-6 text-gray-500 text-sm">
          <p>
            By continuing past this page, you agree to our Terms of Service,
            Privacy Policy and Cookie Policy.
          </p>

          <p className="mt-3">
            © {new Date().getFullYear()} Essen Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
