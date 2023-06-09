import { useNavigate } from "react-router-dom";
import InputBlue from "../components/InputBox/InputBlue";
import { useEffect, useReducer, useState } from "react";

function loginInfoReducer(
  state: { username: string; password: string },
  action: { type: string; value: string }
) {
  switch (action.type) {
    case "username":
      return { ...state, username: action.value };
    case "password":
      return { ...state, password: action.value };
    default:
      return state;
  }
}

export default function Login() {
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [loginInfo, dispatchLoginInfo] = useReducer(loginInfoReducer, {
    username: "",
    password: "",
  });
  const [signupPassword, setSignupPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState(false);

  return (
    <div className="w-screen h-screen flex flex-row">
      <div
        className={
          "h-full w-2/3 object-cover bg-center flex items-center justify-center gap-1 absolute z-10 transition-all"
        }
      >
        <div className="flex flex-col text-center text-5xl font-extrabold text-white gap-4">
          <div>L</div>
          <div>E</div>
          <div>A</div>
          <div>V</div>
          <div>U</div>
          <div>N</div>
          <div>I</div>
          <div>T</div>
          <div>Y</div>
        </div>
      </div>
      <div className={"w-2/3 h-full z-0"}>
        <img
          src="/bg-login.jpg"
          className="h-full object-cover object-center"
          alt="login background"
        />
      </div>
      <div className="w-1/3 h-full right-0 absolute pl-10 pr-10 flex flex-col gap-10 items-stretch justify-center z-10">
        <div className="text-4xl font-bold">
          {isSigningUp ? "Sign up" : "Log in"}
        </div>
        <div className="flex flex-col gap-4">
          <InputBlue
            label="Username"
            type="text"
            value={loginInfo.username}
            onChange={(e: any) =>
              dispatchLoginInfo({ type: "username", value: e.target.value })
            }
          />
          <InputBlue
            label="Password"
            type="password"
            value={loginInfo.password}
            onChange={(e: any) =>
              dispatchLoginInfo({ type: "password", value: e.target.value })
            }
          />
          {!isSigningUp ? (
            <></>
          ) : (
            <>
              <InputBlue
                label="Confirm Password"
                type="password"
                value={signupPassword}
                onChange={(e: any) => setSignupPassword(e.target.value)}
              />
              <InputBlue
                label="Phone number"
                type="text"
                value={phoneNumber}
                onChange={(e: any) => setPhoneNumber(e.target.value)}
              />
            </>
          )}
        </div>
        <div className="flex flex-row gap-4 justify-start items-center">
          {!isSigningUp ? (
            <button
              className={`${
                !loading && error
                  ? "bg-red-500 hover:bg-red-600 active:bg-red-700"
                  : ""
              }`}
            >
              {!loading ? (
                "Log in"
              ) : (
                <div
                  className="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-primary rounded-full"
                  role="status"
                  aria-label="loading"
                >
                  <span className="sr-only">Loading...</span>
                </div>
              )}
            </button>
          ) : (
            <button
              className={`${
                !loading && error
                  ? "bg-red-500 hover:bg-red-600 active:bg-red-700"
                  : ""
              }`}
            >
              {!loading ? (
                "Sign up"
              ) : (
                <div
                  className="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-primary rounded-full"
                  role="status"
                  aria-label="loading"
                >
                  <span className="sr-only">Loading...</span>
                </div>
              )}
            </button>
          )}
          {isSigningUp ? (
            <></>
          ) : (
            <a className="italic underline" href="./login">
              Forgot Password?
            </a>
          )}
          <a
            className="italic cursor-pointer underline"
            onClick={() => setIsSigningUp(!isSigningUp)}
          >
            {isSigningUp ? "Log in." : "Sign up."}
          </a>
        </div>
      </div>
    </div>
  );
}