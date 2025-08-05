import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { setUser, logIn } = use(AuthContext);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    logIn(email, password)
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
        navigate("/");
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
      <h1 className="text-2xl font-bold">Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="border-b border-b-[#ABABAB] outline-none focus:border-b-[#3076FF] transition duration-300 w-full my-4 py-2 validator"
          required
        />
        <div className="validator-hint">Enter valid email address</div>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          className="border-b border-b-[#ABABAB] outline-none focus:border-b-[#3076FF] transition duration-300 w-full my-4 py-2"
          required
        />
        <div className="flex items-center justify-between my-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              name="remember"
              id="remember"
              defaultChecked
              className="checkbox checkbox-info"
            />
            <label htmlFor="remember" className="ml-2">
              Remember me
            </label>
          </div>
          <a
            href="#"
            className="text-[#F9A51A] hover:text-[#3076FF] hover:underline"
          >
            Forgot Password?
          </a>
        </div>
        <button
          type="submit"
          className="btn w-full mt-4 bg-[#F9A51A] border-[#F9A51A] text-black hover:bg-white"
        >
          Login
        </button>

        <p className="text-center mt-4">
          Don't have an account?{" "}
          <Link
            to="/auth/register"
            className="text-[#F9A51A] hover:text-[#3076FF] hover:underline"
          >
            Create an account
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
