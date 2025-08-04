import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="border-2 border-[#ABABAB] rounded p-10">
      <h1 className="text-2xl font-bold">Create an account</h1>
      <form action="">
        <input
          type="text"
          name="firstName"
          placeholder="Enter your first name"
          className="border-b border-b-[#ABABAB] outline-none focus:border-b-[#3076FF] transition duration-300 w-full my-4 py-2 validator"
          required
        />
        <div className="validator-hint">Please enter first name</div>
        <input
          type="text"
          name="lastName"
          placeholder="Enter your last name"
          className="border-b border-b-[#ABABAB] outline-none focus:border-b-[#3076FF] transition duration-300 w-full my-4 py-2 validator"
          required
        />
        <div className="validator-hint">Please enter last name</div>
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
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm your password"
          className="border-b border-b-[#ABABAB] outline-none focus:border-b-[#3076FF] transition duration-300 w-full my-4 py-2"
          required
        />

        <button
          type="submit"
          className="btn w-full mt-4 bg-[#F9A51A] border-[#F9A51A] text-black hover:bg-white"
        >
          Create an account
        </button>

        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link
            to="/auth/login"
            className="text-[#F9A51A] hover:text-[#3076FF] hover:underline"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
