import React, { use } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const ResetPassword = () => {
  const { resetPassword } = use(AuthContext);

  const handleResetPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();

    resetPassword(email)
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Password reset email sent",
          showConfirmButton: true,
          timer: 1500,
        });
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
    <div className="border-2 border-[#ABABAB] rounded p-10">
      <h1 className="text-2xl font-bold">Reset Password</h1>
      <form onSubmit={handleResetPassword}>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="border-b border-b-[#ABABAB] outline-none focus:border-b-[#3076FF] transition duration-300 w-full my-4 py-2 validator"
          required
        />

        <button
          type="submit"
          className="btn w-full mt-4 bg-[#F9A51A] border-[#F9A51A] text-black hover:bg-white"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
