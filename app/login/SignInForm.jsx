import React from "react";
import { useGoogleLogin } from "@react-oauth/google";

function SignInForm({ setType }) {
  const [state, setState] = React.useState({
    email: "",
    password: "",
  });
  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();

    const { email, password } = state;
    alert(`You are login with email: ${email} and password: ${password}`);

    for (const key in state) {
      setState({
        ...state,
        [key]: "",
      });
    }
  };

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });

  return (
    <div className="form-container bg-white sign-in-container w-full md:w-1/2 flex justify-center items-center">
      <div className="mx-5 md:mx-20 p-7 border border-gray-300 min-w-[80%] lg:min-w-[60%] rounded-2xl">
        <form onSubmit={handleOnSubmit}>
          <h1 className="text-3xl font-bold">Sign in</h1>
          <p className="text-base font-normal text-black">
            Welcome back to your account
          </p>
          {/* <span>or use your account</span> */}
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="focus:shadow-md focus:bg-gray-50 hover:bg-gray-50 border-gray-200 hover:border-gray-300 focus:border-gray-300"
            value={state.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="focus:shadow-md focus:bg-gray-50 hover:bg-gray-50 border-gray-200 hover:border-gray-300 focus:border-gray-300"
            value={state.password}
            onChange={handleChange}
          />
          <a href="#" className="hover:text-[#EB3C75] duration-300">
            Forgot your password?
          </a>
          <button className="w-full hover:bg-[#860e35] border-0 hover:shadow-md">
            Sign In
          </button>
          <div className="flex w-full items-center gap-3 text-[#808285] mt-4">
            <hr className="flex-1 h-[2px] bg-[#808285]" />
            OR
            <hr className="flex-1 h-[2px] bg-[#808285]" />
          </div>
          <div className="social-container w-full">
            <button
              type="button"
              className="bg-white hover:bg-gray-100 hover:shadow-md duration-300 border border-gray-300 w-full flex justify-center items-center"
              onClick={() => login()}
            >
              <img src="/google.png" alt="google" className="h-5 w-5 " />
            </button>
            <div className="flex justify-center gap-1 mt-3 md:hidden">
              Don’t have an account?{" "}
              <div
                className="font-bold text-[#EB3C75] cursor-pointer"
                onClick={() => {
                  setType("signUp");
                }}
              >
                Sign up
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignInForm;
