import { useState } from "react";
import axios from "axios";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

      // STORE TOKEN
      localStorage.setItem(
        "token",
        res.data.token
      );

      // STORE USER
      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      alert("Login Successful 🎉");

      window.location.href = "/home";

    } catch (error) {

      console.log(error);

      alert(
        error.response?.data?.message ||
        "Login Failed"
      );
    }
  };

  return (

    <div className="min-h-screen flex justify-center items-center bg-[#f5f1ea] relative overflow-hidden">

      {/* FLOATING FOOD */}

      <div className="absolute top-10 left-10 text-6xl animate-bounce opacity-20">
        🍕
      </div>

      <div className="absolute bottom-16 left-24 text-5xl animate-pulse opacity-20">
        🍔
      </div>

      <div className="absolute top-20 right-20 text-6xl animate-bounce opacity-20">
        🍟
      </div>

      <div className="absolute bottom-10 right-10 text-5xl animate-pulse opacity-20">
        🌮
      </div>

      <div className="absolute top-1/2 left-5 text-5xl animate-bounce opacity-10">
        🥤
      </div>

      <div className="absolute top-1/3 right-5 text-5xl animate-pulse opacity-10">
        🍩
      </div>

      {/* FORM */}

      <form
        onSubmit={handleLogin}
        className="bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-2xl w-[380px] border border-white/40"
      >

        <h1 className="text-4xl font-bold mb-8 text-center">
          Welcome Back 👋
        </h1>

        {/* EMAIL */}

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full border p-3 rounded-xl mb-5 outline-none"
          required
        />

        {/* PASSWORD */}

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="w-full border p-3 rounded-xl mb-6 outline-none"
          required
        />

        {/* BUTTON */}

        <button
          className="w-full bg-black text-white p-3 rounded-xl hover:bg-gray-800 transition"
        >
          Login
        </button>

        {/* SIGNUP LINK */}

        <p className="text-center mt-5 text-gray-600">

          Don't have an account?

          <a
            href="/signup"
            className="text-orange-500 ml-2 font-semibold"
          >
            Signup
          </a>

        </p>

      </form>

    </div>
  );
}

export default Login;