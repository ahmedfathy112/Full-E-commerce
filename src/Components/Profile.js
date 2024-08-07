import AvatarImage from "../Images/avatar.jpg";
import { useForm } from "react-hook-form";
import { auth, db } from "../Firebase";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";
import {
  getAuth,
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
} from "firebase/auth";
import "firebase/compat/auth";

const MyFirstForm = ({ userDetails, onSave }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Update username in Firebase
      const userRef = doc(db, "Users", auth.currentUser.uid);
      await setDoc(userRef, { userName: data.username }, { merge: true });
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Username updated successfully!",
      });
      if (onSave) onSave(); // Call onSave if provided
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Failed to update username!",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="my-8">
      <div>
        <label
          htmlFor="username"
          className="block text-sm font-medium text-gray-700"
        >
          Username
        </label>
        <input
          id="username"
          disabled
          defaultValue={userDetails?.userName}
          {...register("username", { required: "Username is required" })}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {errors.username && (
          <span className="text-red-500 text-sm">
            {errors.username.message}
          </span>
        )}
      </div>

      <div className="mt-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          defaultValue={userDetails?.Email}
          disabled
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-200 cursor-not-allowed focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
    </form>
  );
};

const PasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const auth = getAuth();

  const onSubmit = async (data) => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (!user) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "User is not logged in!",
      });
      return;
    }

    const credential = EmailAuthProvider.credential(
      user.email,
      data.oldPassword
    );

    try {
      await reauthenticateWithCredential(user, credential);
      await updatePassword(user, data.newPassword);
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Password updated successfully!",
      });
    } catch (error) {
      console.error("Error updating password:", error);
      let errorMessage = "Failed to update password!";

      if (error.code === "auth/wrong-password") {
        errorMessage = "The old password is incorrect.";
      } else if (error.code === "auth/weak-password") {
        errorMessage = "New password is too weak.";
      } else if (error.code === "auth/requires-recent-login") {
        errorMessage =
          "You need to log in again before updating your password.";
      }

      Swal.fire({
        icon: "error",
        title: "Error!",
        text: errorMessage,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="my-8">
      <div>
        <label
          htmlFor="oldPassword"
          className="block text-sm font-medium text-gray-700"
        >
          Old Password
        </label>
        <input
          id="oldPassword"
          type="password"
          {...register("oldPassword", { required: "Old password is required" })}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {errors.oldPassword && (
          <span className="text-red-500 text-sm">
            {errors.oldPassword.message}
          </span>
        )}
      </div>

      <div className="my-4">
        <label
          htmlFor="newPassword"
          className="block text-sm font-medium text-gray-700"
        >
          New Password
        </label>
        <input
          id="newPassword"
          type="password"
          {...register("newPassword", { required: "New password is required" })}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {errors.newPassword && (
          <span className="text-red-500 text-sm">
            {errors.newPassword.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Save Changes
      </button>
    </form>
  );
};
export default function Profile() {
  const [userDetails, setUserDetails] = useState(null);
  const [formKey, setFormKey] = useState(0); // Key to reset form
  const navigate = useNavigate();
  const { handleSubmit } = useForm(); // Create useForm instance

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "User Is Not LoggedIn!",
          });
        }
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  async function LogOut() {
    try {
      await auth.signOut();
      navigate("/login");
      Swal.fire({
        icon: "success",
        title: "Done!",
        text: "Logout success!",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Logout failed!",
      });
    }
  }

  const handleSaveChanges = () => {
    setFormKey((prevKey) => prevKey + 1); // Refresh form
  };

  return (
    <div className="min-h-[100vh]">
      <h1 className="text-2xl font-semibold text-center my-8">My Account</h1>
      {userDetails ? (
        <div className="flex flex-row max-md:!flex-col">
          <div className="w-[30%] h-[45%] bg-[#F3F5F7] rounded-lg py-4 px-4 text-center max-md:w-full">
            <div className="flex flex-col justify-center">
              <img
                src={AvatarImage}
                className="w-[70px] h-[70px] rounded-full mb-3 mx-auto"
                alt="User Avatar"
              />
              <h3 className="text-xl font-medium">{userDetails.userName}</h3>
            </div>
            <ul className="w-full mt-[50px] list-none flex flex-col justify-between text-left max-md:text-center">
              <a
                href="#"
                className="text-gray-500 text-[20px] font-medium mb-2 active:text-black active:border-b-2 active:pb-2"
              >
                Account
              </a>
              <a
                href="#"
                className="text-gray-500 text-[20px] font-medium mb-2 active:text-black active:border-b-2 active:pb-2"
              >
                WhishList
              </a>
              <Link
                to="/cart"
                className="text-gray-500 text-[20px] font-medium mb-2 active:text-black active:border-b-2 active:pb-2"
              >
                Orders
              </Link>
              <a
                href="#"
                onClick={LogOut}
                className="text-gray-500 text-[20px] font-medium mb-2 active:text-black active:border-b-2 active:pb-2"
              >
                LogOut
              </a>
            </ul>
          </div>
          <div className="w-[70%] px-4 py-3 max-md:w-full">
            <div className="flex flex-col w-full text-left">
              <h3 className="text-left text-xl font-semibold">
                Account Details
              </h3>
              <MyFirstForm
                key={formKey}
                userDetails={userDetails}
                onSave={handleSaveChanges}
              />
            </div>
            <div className="flex flex-col w-full text-left">
              <h3 className="text-left text-xl font-semibold">Password</h3>
              <PasswordForm />
            </div>
          </div>
        </div>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
}
