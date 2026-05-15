import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children, cartCount, isLoggedIn, setIsLoggedIn }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#f8f5f0] via-[#f3ede3] to-[#ece5da]">

      {/* NAVBAR */}
      <Navbar
        cartCount={cartCount}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />

      {/* PAGE CONTENT */}
      <main className="flex-1 relative z-10">
        {children}
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default Layout;