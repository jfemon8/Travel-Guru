import React, { use } from "react";
import Navbar3 from "../components/Navbar/Navbar3";
import { Outlet, useNavigate } from "react-router";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const Auth = () => {
  const { logInWithGoogle, setUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleGoogleLogIn = () => {
    logInWithGoogle()
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login successful",
          showConfirmButton: true,
          timer: 1500,
        });
        navigate(`${location.state || "/"}`);
      })
      .catch((error) => {
        const errorMessage = error.message;
        Swal.fire({
          position: "center",
          icon: "error",
          title: errorMessage,
          showConfirmButton: true,
          timer: 1500,
        });
      });
  };

  return (
    <div className="bg-white text-black">
      <Navbar3 />

      <div className="w-3/4 lg:w-1/2 mx-auto p-4 xl:p-8">
        <Outlet />
        <div className="flex items-center justify-center gap-2 w-11/12 mx-auto my-4">
          <hr className="w-2/5 border border-[#AAAAAA]" />
          <p className="font-medium">Or</p>
          <hr className="w-2/5 border border-[#AAAAAA]" />
        </div>
        <div
          className="flex items-center justify-between p-2 border border-[#C7C7C7] rounded-full w-5/6 mx-auto my-2 cursor-pointer hover:bg-[#C7C7C7]"
          onClick={handleGoogleLogIn}
        >
          <FaGoogle size={37} color="#34A853" />
          <p className="font-medium">Continue with Google</p>
          <div></div>
        </div>
        <div className="flex items-center justify-between p-2 border border-[#C7C7C7] rounded-full w-5/6 mx-auto my-2 cursor-pointer hover:bg-[#C7C7C7]">
          <FaFacebook size={37} color="#3076FF" />
          <p className="font-medium">Continue with Facebook</p>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
