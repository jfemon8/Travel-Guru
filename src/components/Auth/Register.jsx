import React, { use, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { setUser, createUser, updateUser } = use(AuthContext);
  const [matchPassword, setMatchPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    if (name === "password") {
      setPassword(value);
    } else if (name === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  useEffect(() => {
    if (password !== confirmPassword) {
      setMatchPassword(true);
    } else {
      setMatchPassword(false);
    }
  }, [password, confirmPassword]);

  const handleRegistration = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Passwords do not match",
        showConfirmButton: false,
        timer: 1000,
      });
      return;
    }
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        updateUser(user, firstName + " " + lastName);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "User created successfully",
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
      <h1 className="text-2xl font-bold">Create an account</h1>
      <form onSubmit={handleRegistration}>
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
          className="border-b border-b-[#ABABAB] outline-none focus:border-b-[#3076FF] transition duration-300 w-full my-4 py-2 validator"
          required
          onKeyUp={handlePasswordChange}
          minlength="6"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
          title="Must be more than 6 characters, including number, lowercase letter, uppercase letter"
        />
        <p className="validator-hint">
          Must be more than 6 characters, including at least one number, one
          lowercase letter and one uppercase letter
        </p>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm your password"
          className="border-b border-b-[#ABABAB] outline-none focus:border-b-[#3076FF] transition duration-300 w-full my-4 py-2"
          required
          onKeyUp={handlePasswordChange}
        />
        <small className="text-red-400 text-xs">
          {matchPassword ? "Passwords do not match" : ""}
        </small>

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
