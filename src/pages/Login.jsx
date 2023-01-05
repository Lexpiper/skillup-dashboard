import React from "react";
import GoogleImg from "../assets/googleimg.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, seterror] = useState("");
  // const [logging, setLogging] = useState(false)
  const navigate = useNavigate();

  const handleLogin = () => {
    try {
      if (!(email && password)) {
         seterror("all fields are required")
         toast.error('all fields required');
      }
      
      // FOR LOGOUT ACTION localStorage.removeItem('login_in_token')
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="w-full h-screen bg-[#e9ecf4] ">
      <div className=" mx-auto w-[80%] h-full py-5 flex items-center">
        <ToastContainer
          position="top-right"
          autoClose={19000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <div className="bg-black text-white flex flex-col items-center flex-1 h-full pt-10 px-20">
          <Link
            to="/"
            className="text-3xl font-bold place-self-start animate__animated animate__bounce pb-2 "
          >
            Ski<span className="text-4xl text-[#A555EC]">ll</span>up
          </Link>
          <h2 className="place-self-start text-xl">
            Hi, welcome to <span>Skillup!</span>
          </h2>
          <form className="flex flex-col mt-8 w-[70%] shadow-lg p-2 text-sm">
            {error ? <div className="text-red-400">{error}</div> : null}
            <label className="mb-2">Email</label>
            <input
              type="email"
              className="text-black outline-none border-[1px] rounded-full placeholder:text-slate-300 p-2 border-black border-solid h-[42px] mb-4"
              placeholder="name@email.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="mb-2">Password</label>
            <input
              type="password"
              className="text-black outline-none border-[1px] rounded-full placeholder:text-slate-300 p-2 border-black border-solid h-[42px] mb-4 placeholder:text-sm"
              placeholder="xxxxxxxx"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              onClick={handleLogin}
              className="bg-slate-300 rounded-full p-2 text-black mt-2 hover:bg-slate-700 hover:text-white transition-all ease-in-out delay-100"
            >
              Login
            </button>
            <button className=" ml-[5px] mt-4 border w-full p-1 h-[40px] rounded-full group-hover:text-black flex flex-row items-center justify-center">
              <div className="w-[15px] h-[15px] ">
                <img
                  src={GoogleImg}
                  alt={"Google image"}
                  width={"100%"}
                  height={"100%"}
                  loading="lazy"
                />
              </div>
              <div className="text-sm pl-6 text-white">
                Sign up with Google.
              </div>
            </button>
          </form>
          <div className="flex gap-2 mt-8 items-center">
            <input type="checkbox" />
            <p className="text-sm text-dimWhite">
              i agree to terms and conditions
            </p>
          </div>
          <p className="text-sm text-dimWhite mt-2">
            Not a member yet?{" "}
            <Link to="/signup" className="text-white">
              Sign up
            </Link>
          </p>
        </div>

        <div className="bg-black flex-1 h-full w-full">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3R1ZHklMjBkYXNoYm9hcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
            alt="avatar"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
