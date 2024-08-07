import { useGoogleLogin } from "@react-oauth/google";
import React from "react";
function SignUpForm({ setType }) {
  const [state, setState] = React.useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    cpassword: "",
    referral: "",
    show: false,
  });
  const handleChange = (evt) => {
    const value = evt.target.value;
    if (evt.target.id === "show") {
      setState({
        ...state,
        [evt.target.name]: evt.target.checked,
      });
    } else {
      setState({
        ...state,
        [evt.target.name]: value,
      });
    }
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();

    const { name, email, password } = state;
    alert(
      `You are sign up with name: ${name} email: ${email} and password: ${password}`
    );

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
    <div className="form-container bg-white sign-up-container w-full md:w-1/2 flex justify-center items-center">
      <div className="mx-5 md:m-20 p-7 border border-[#EEF4F6] min-w-[80%] lg:min-w-[60%] rounded-2xl">
        <form onSubmit={handleOnSubmit} className="text-start">
          <h1 className="text-3xl font-bold">Sign up</h1>
          <div className="social-container w-full">
            <button
              type="button"
              className="bg-white hover:bg-[#fff0f5] duration-300 border border-[#EEF4F6] w-full flex justify-center items-center"
              onClick={() => login()}
            >
              <img src="/google.png" alt="google" className="h-5 w-5 " />
            </button>
          </div>
          <div className="flex w-full items-center gap-3 text-[#808285] mb-3">
            <hr className="flex-1 h-[2px] bg-[#808285]" />
            OR
            <hr className="flex-1 h-[2px] bg-[#808285]" />
          </div>
          <div className="w-full flex flex-col md:flex-row items-center md:gap-5">
            <div className="w-full">
              <label for="first-name">First Name</label>
              <input
                id="first-name"
                type="text"
                name="fname"
                value={state.fname}
                onChange={handleChange}
              />
            </div>
            <div className="w-full">
              <label for="last-name">Last Name</label>
              <input
                id="last-name"
                type="text"
                name="lname"
                value={state.lname}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="w-full">
            <label for="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={state.email}
              onChange={handleChange}
            />
          </div>

          <div className="w-full flex flex-col md:flex-row items-center md:gap-5">
            <div className="w-full">
              <label for="password">Password</label>
              <input
                id="password"
                type={state.show ? "text" : "password"}
                name="password"
                value={state.password}
                onChange={handleChange}
              />
            </div>
            <div className="w-full">
              <label for="confirm-password">Confirm Password</label>
              <input
                id="confirm-password"
                type={state.show ? "text" : "password"}
                name="cpassword"
                value={state.cpassword}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="w-full">
            <label for="referral">Referral Code</label>
            <input
              id="referral"
              type="text"
              name="referral"
              value={state.referral}
              onChange={handleChange}
            />
          </div>
          <div className="w-full flex justify-start my-3 items-center gap-3">
            <input
              id="show"
              type="checkbox"
              name="show"
              value={state.show}
              onChange={handleChange}
              className="w-4 h-4 m-0 checked:accent-[#EB3C75]"
            />
            <label for="show" className="flex-1">
              Show Password
            </label>
          </div>

          <button className="w-full hover:bg-[#860e35]">Sign Up</button>
          <div className="flex justify-center gap-1 mt-3 md:hidden">
            Don’t have an account?{" "}
            <div
              className="font-bold text-[#EB3C75] cursor-pointer"
              onClick={() => {
                setType("signIn");
              }}
            >
              Sign in
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
