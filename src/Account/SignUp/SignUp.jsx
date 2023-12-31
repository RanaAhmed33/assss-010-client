import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProviders";
import { toast } from "react-hot-toast";

const SignUp = () => {
  const [PasswordShow, setPasswordShow] = useState(true);
  const { createUser, setUser, GetProfile } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const navigation = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const form = e.target;
    console.log(form);
    if (!/(?=.*[A-Z])/.test(password)) {
      setPasswordError("Please add at least one uppercase ");
      return;
    } else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
      setPasswordError("Please add at least two number");
      return;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      return;
    } else if (password !== confirmPassword) {
      setPasswordError("Sorry password don't match");
      return;
    } else {
      setPasswordError("");
    }
    createUser(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        // navigate(from, { replace: true });
        // setUser(loggedInUser);
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setPhoto("");
        form.reset();
        navigation("/login");
        toast.success("SignUp Successfully");
        GetProfile(result.user, name, photo)
          .then(() => {
            console.log("done");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {

        setPasswordError(error.message);
      });
  };
  const handleEmail = (e) => {
    const emailInput = e.target.value;
    setEmail(emailInput);
  };

  const handlePassword = (e) => {
    const passwordInput = e.target.value;
    setPassword(passwordInput);
  };
  const handleConfirmPassword = (e) => {
    const confirmPasswordInput = e.target.value;
    setConfirmPassword(confirmPasswordInput);
  };
  const handleURL = (e) => {
    const image = e.target.value;
    setPhoto(image);
  };
  const handleName = (e) => {
    const name = e.target.value;
    setName(name);
  };

  return (
    <section className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-10 lg:px-8 gap-10 flex flex-col items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100 bg-[#111827]">
        <h1 className="text-2xl font-bold text-center text-gray-300">
          SIGN UP
        </h1>
        <form onSubmit={handleSubmitForm} action="" className="space-y-6 ">
          <div className="space-y-1 text-sm">
            <label htmlFor="name" className="block text-gray-400">
              NAME
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={handleName}
              placeholder="Enter Your Email"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            // required
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-gray-400">
              EMAIL
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleEmail}
              placeholder="Enter Your Email"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              required
            />
          </div>
          <div className="space-y-1 text-sm relative">
            <label htmlFor="password" className="block text-gray-400">
              PASSWORD
            </label>
            <input
              type={PasswordShow ? "password" : "text"}
              name="password"
              id="password"
              value={password}
              onChange={handlePassword}
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-500 dark:text-gray-100 focus:dark:border-violet-400 mb-2"
              required
            />

            {PasswordShow ? (
              <FaEyeSlash
                className="absolute right-3 bottom-0 top-9 cursor-pointer"
                onClick={() => setPasswordShow(!PasswordShow)}
              ></FaEyeSlash>
            ) : (
              <FaEye
                onClick={() => setPasswordShow(!PasswordShow)}
                className="absolute right-3 bottom-0 top-9 cursor-pointer"
              ></FaEye>
            )}
          </div>
          <div className="space-y-1 text-sm relative">
            <label htmlFor="password" className="block text-gray-400">
              CONFIRM PASSWORD
            </label>
            <input
              type={PasswordShow ? "password" : "text"}
              name="confirmPassword"
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPassword}
              placeholder="Confirm Password"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              required
            />
            {PasswordShow ? (
              <FaEyeSlash
                className="absolute right-3 bottom-0 top-9 cursor-pointer"
                onClick={() => setPasswordShow(!PasswordShow)}
              ></FaEyeSlash>
            ) : (
              <FaEye
                onClick={() => setPasswordShow(!PasswordShow)}
                className="absolute right-3 bottom-0 top-9 cursor-pointer"
              ></FaEye>
            )}
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-gray-400">
              PHOTO URL
            </label>
            <input
              type="text"
              name="text"
              id="text"
              onChange={handleURL}
              placeholder="Enter Your Email"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            // required
            />
          </div>
          <div className="mt-6 text-center">
            {passwordError && (
              <span className="text-yellow-500">{passwordError}</span>
            )}
          </div>
          <button className="block w-full p-3 text-center rounded-sm text-gray-500 bg-violet-200 ">
            SIGN UP
          </button>
        </form>

        <p className="text-base text-center sm:px-6 dark:text-gray-400 text-slate-300">
          ALREADY HAVE YOU ACCOUNT?
          <Link className="text-white ml-2 btn-link" to="/login">
            LOGIN
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignUp;
