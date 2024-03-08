import React from "react";
import { Link } from "react-router-dom";
// import Swal from "sweetalert2";

const Login = () => {
  return (
    <>
      <form>
        <div className="mt-8">
          <p className="text-center text-[25px] my-4">Sign in Form</p>
          <div className=" border-gray-900 rounded-md p-4  bg-gray-100 mx-14 md:mx-40 lg:mx-64 xl:mx-96 xl:w-[40%] xl:ml-[32%]">
            <div className="my-2">
              <label className="text-[15px]">Username or email address :</label>
              <br />
              <input 
                type="email"
                className="border w-full pl-2 rounded-md py-1 my-2"
                placeholder="Enter email"
              />
            </div>
            
            <div className="my-2">
              <label className="text-[15px]">Password : </label>
              <br />
              <input
                type="password"
                className="border w-full pl-2 rounded-md py-1 my-2"
                placeholder="password"
              />
            </div>
            <div className="my-1 text-center">
              <button className="font-bold bg-green-700 text-white w-full md:w-[20%] lg:w-[20%] xl:w-[20%] rounded-md text-[14px] py-1.5 md:my-2">
                Login
              </button>
            </div>
          </div>
        </div>
      </form>
      <div className="rounded-md p-4 bg-gray-50 mx-14 mt-4 md:mx-40 lg:mx-64 xl:mx-96">
        <p className="text-center text-blue-500">Sign in with a Google</p>
        <p className="text-center text-[15px]">
          New to Qloron?{" "}
          <Link to="/register">
            <span className="text-blue-500">Create an account</span>
          </Link>
        </p>
      </div>
    </>
  );
};

export default Login;
