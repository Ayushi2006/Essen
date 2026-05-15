import { useState } from "react";
import axios from "axios";
import { FaUserCircle } from "react-icons/fa";

function Profile() {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const hasOrder = localStorage.getItem("hasOrder");

  const [user, setUser] = useState(storedUser);

  const [image, setImage] = useState(user?.profilePic || "");
  const [address, setAddress] = useState(user?.address || "");
  const [phone, setPhone] = useState(user?.phone || "");

  const [editing, setEditing] = useState(false);
  const [editingPhone, setEditingPhone] = useState(false);

  // IMAGE UPLOAD
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = async () => {
      try {
        setImage(reader.result);

        const res = await axios.put(
          "http://localhost:5000/api/auth/upload-profile",
          {
            userId: user._id,
            image: reader.result,
          },
        );

        setUser(res.data.user);
        localStorage.setItem("user", JSON.stringify(res.data.user));

        alert("Profile updated!");
      } catch (error) {
        console.log(error);
        alert("Upload failed");
      }
    };
  };

  // REMOVE PROFILE PHOTO
  const removeImage = async () => {
    try {
      setImage("");

      const res = await axios.put(
        "http://localhost:5000/api/auth/upload-profile",
        {
          userId: user._id,
          image: "",
        },
      );

      setUser(res.data.user);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Profile photo removed!");
    } catch (error) {
      console.log(error);
      alert("Failed to remove photo");
    }
  };

  // CANCEL ORDER
  const cancelOrder = () => {
    if (hasOrder !== "true") {
      alert("No orders yet 🍽️");
      return;
    }

    localStorage.removeItem("hasOrder");

    alert("Order Cancelled ❌");

    window.location.reload();
  };

  // SAVE ADDRESS
  const saveAddress = async () => {
    try {
      const res = await axios.put(
        `http://localhost:5000/api/auth/update-address/${user._id}`,
        { address },
      );

      setUser(res.data);
      localStorage.setItem("user", JSON.stringify(res.data));

      setEditing(false);

      alert("Address Updated!");
    } catch (error) {
      console.log(error);
    }
  };

  // SAVE PHONE
  const savePhone = async () => {
    try {
      const res = await axios.put(
        `http://localhost:5000/api/auth/update-phone/${user._id}`,
        { phone },
      );

      setUser(res.data);
      localStorage.setItem("user", JSON.stringify(res.data));

      setEditingPhone(false);

      alert("Phone Updated!");
    } catch (error) {
      console.log(error);
    }
  };
  // DELETE ACCOUNT
  const deleteAccount = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete your account?",
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `http://localhost:5000/api/auth/delete-account/${user._id}`,
      );

      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("hasOrder");

      alert("Account Deleted Successfully");

      window.location.href = "/signup";
    } catch (error) {
      console.log(error);

      alert("Failed to delete account");
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f1ea] p-10">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-10">
        <h1 className="text-4xl font-bold mb-6 flex items-center gap-3">
          <FaUserCircle className="text-Black-500" />
          Profile
        </h1>

        {/* PROFILE PIC */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={image || "https://via.placeholder.com/120"}
            className="w-32 h-32 rounded-full object-cover border shadow-md"
            alt="profile"
          />

          {/* HIDDEN INPUT */}
          <input
            type="file"
            id="fileUpload"
            onChange={handleImage}
            className="hidden"
          />

          {/* BUTTONS */}
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={() => document.getElementById("fileUpload").click()}
              className="px-4 py-2 bg-black text-white rounded-xl hover:bg-gray-800"
            >
              Change Photo
            </button>

            <button
              onClick={removeImage}
              className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600"
            >
              Remove Photo
            </button>
          </div>
        </div>

        {/* USER INFO */}
        <div className="space-y-4">
          <p className="text-xl">
            <b>Name:</b> {user?.name}
          </p>

          <p className="text-xl">
            <b>Email:</b> {user?.email}
          </p>

          {/* PHONE */}
          <div className="text-xl">
            <b>Phone:</b>{" "}
            {editingPhone ? (
              <div className="mt-2 space-y-2">
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="border p-2 rounded-xl w-full"
                />

                <button
                  onClick={savePhone}
                  className="bg-black text-white px-4 py-2 rounded-xl"
                >
                  Save Phone
                </button>
              </div>
            ) : (
              <div className="flex justify-between items-center">
                <span>{phone || "No phone added"}</span>

                <button
                  onClick={() => setEditingPhone(true)}
                  className="text-orange-500 font-semibold"
                >
                  Edit
                </button>
              </div>
            )}
          </div>
        </div>

        <br />

        {/* ADDRESS */}
        <div className="space-y-4 text-xl">
          <h1>
            <b>Delivery Address:</b>
          </h1>

          {editing ? (
            <div className="space-y-3">
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full border p-3 rounded-xl"
              />

              <button
                onClick={saveAddress}
                className="bg-black text-white px-4 py-2 rounded-xl"
              >
                Save Address
              </button>
            </div>
          ) : (
            <div className="flex justify-between items-center">
              <p className="text-gray-700">{address || "No address added"}</p>

              <button
                onClick={() => setEditing(true)}
                className="text-orange-500 font-semibold"
              >
                Edit
              </button>
            </div>
          )}
        </div>

        {/* ORDER STATUS */}
        <div className="mt-10">
          {hasOrder === "true" ? (
            <div className="bg-orange-100 p-6 rounded-2xl">
              <h2 className="text-2xl font-bold text-orange-600">
                🚚 Order is on the way!
              </h2>
            </div>
          ) : (
            <div className="bg-gray-100 p-6 rounded-2xl">
              <h2 className="text-2xl font-bold text-gray-600">
                No Orders Yet 🍽️
              </h2>
            </div>
          )}

          <br />

          <div className="flex gap-6">
            <button
              onClick={() => (window.location.href = "/home")}
              className="px-4 py-2 text-sm rounded-xl bg-blue-500 text-white"
            >
              Home
            </button>

            <button
              onClick={cancelOrder}
              className="px-4 py-2 text-sm rounded-xl bg-red-500 text-white"
            >
              Cancel Order
            </button>
            <button
              onClick={deleteAccount}
              className="px-4 py-2 text-sm rounded-xl bg-black text-white hover:bg-gray-800"
            >
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
