import React from "react";
import { useGoogleLogin } from '@react-oauth/google';

function SignInForm() {
    const [state, setState] = React.useState({
        email: "",
        password: ""
    });
    const handleChange = evt => {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    };

    const handleOnSubmit = evt => {
        evt.preventDefault();

        const { email, password } = state;
        alert(`You are login with email: ${email} and password: ${password}`);

        for (const key in state) {
            setState({
                ...state,
                [key]: ""
            });
        }
    };

    const login = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
    });

    return (
        <div className="form-container sign-in-container px-20 border border-[#EEF4F6]">
            <form onSubmit={handleOnSubmit}>
                <h1 className="text-3xl font-bold">Sign in</h1>
                <div className="social-container w-full">
                    <button type="button" className="bg-white border border-[#EEF4F6] w-full flex justify-center items-center" onClick={() => login()}>
                        <img src="/google.png" alt="google" className="h-5 w-5 " />
                    </button>
                </div>
                {/* <span>or use your account</span> */}
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={state.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={state.password}
                    onChange={handleChange}
                />
                <a href="#">Forgot your password?</a>
                <button>Sign In</button>
            </form>
        </div>
    );
}

export default SignInForm;
