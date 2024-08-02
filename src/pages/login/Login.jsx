import React from "react";

function Login() {
  return (
    <>
      <div className="flex flex-col items-start justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
          <h1 className="text-3xl font-semibold text-center text-grey-300">
            Login
            <span className="text-blue-500"> ChatWave</span>
          </h1>

          {/* Main form tag */}
          <form action="">
            <div>
              {/* Username */}
              <label className="label p-2">
                <span className="text-xl label-text">Username</span>
              </label>
              <input
              type="text"
              className="input input-bordered w-full h-10"
              placeholder="Enter Username"
              />
            </div>
            <div>{/* Password */}
                <label className="label p-2">
                    <span className="text-xl label-text">Password</span>  
                </label>
                <input
                type="password"
                className="input input-bordered w-full h-10"
                placeholder="Enter Password"
                />
            </div>
            <a href="" className="text-sm hover:underline hover:text-blue-400 mt-2 inline-block">Don't have an account?</a>
            <div>
                {/* Login button */}
                <button className="btn btn-block mt-3 btn-sm h-10">Login</button>

            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;