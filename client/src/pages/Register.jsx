import React from "react";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Register = () => {
  // const navigate = useNavigate();

  return (
    <>
      <div>
        <form>
          <div className="mt-4">
            <p className="text-center text-[24px] my-4 font-semibold">Sign up</p>
            <div className=" border-gray-900 rounded-md p-3 bg-gray-100 mx-12 md:mx-36 lg:mx-[28%] lg:ml-[30%] xl:w-[30%] xl:ml-[36%]">
              <div className="my-2">
                <label className="text-[15px]">Name :</label>
                <br />
                <input
                  type="text"
                  className="border w-full pl-2 rounded-md py-1 my-2 "
                  placeholder="Enter name"
                />
              </div>
              <div className="my-2">
                <label className="text-[15px]">Email :</label>
                <br />
                <input
                  type="email"
                  className="border w-full pl-2 rounded-md py-1 my-2 "
                  placeholder="Enter email"
                />
              </div>

              <div className="my-2">
                <label className="text-[15px]">Phone no : </label>
                <br />
                <input
                  type="number"
                  className="border w-full pl-2 rounded-md py-1 my-2"
                  placeholder="Phone number"
                />
              </div>

              <div className="my-2">
                <label className="text-[15px]">Password :</label>
                <br />
                <input
                  type="password"
                  className="border w-full pl-2 rounded-md py-1 my-2 "
                  placeholder="password"
                />
              </div>
              <div className="my-2">
                <label className="text-[15px]">Confirm Password :</label>
                <br />
                <input
                  type="password"
                  className="border w-full pl-2 rounded-md py-1 my-2"
                  placeholder="confirm password"
                />
              </div>
              <div className="my-1 text-center lg:text-center">
                <button className="font-bold bg-green-700 text-white w-[100%] rounded-md text-[14px] py-1.5 md:my-2 md:w-[30%]">
                  Register
                </button>
              </div>
            </div>
          </div>
        </form>
        <div className="rounded-md p-4 bg-gray-50 mx-14 mt-4 md:mx-40 lg:w-[40%] lg:ml-[30%] xl:w-[30%] xl:ml-[36%]">
          <p className="text-center text-blue-500">Sign up with a Google</p>
          <p className="text-center text-[15px]">
            Already have an account?{" "}
            <Link to="/login">
              <span className="text-blue-500">Login here</span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
