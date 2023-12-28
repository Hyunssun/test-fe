import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const Login = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState<any>({
    id: "",
    password: "",
  });

  const onClickLogin = async () => {
    axios
      .post(`${process.env.REACT_APP_API_KEY}/user/login`, {
        userid: input.id,
        password: input.password,
      })
      .then((payload: any) => {
        if (payload.data.message === "success") {
          console.log(payload);
          navigate("/main");
        } else {
          console.log(payload.data.message);
        }
      })
      .catch((e: any) => {
        console.log("연결 실패", e);
      });
  };

  return (
    <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200 py-10">
      <div className="flex shadow-md">
        <div
          className="flex flex-wrap content-center justify-center rounded-l-md bg-white"
          style={{ width: "24rem", height: "32rem" }}
        >
          <div className="w-72">
            <h1 className="text-xl font-semibold">Welcome back</h1>
            <small className="text-gray-400">
              Welcome back! Please enter your details
            </small>

            <div className="mt-4">
              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">ID</label>
                <input
                  type="id"
                  placeholder="Enter your ID"
                  onChange={(val) => {
                    setInput({ ...input, id: val.target.value });
                  }}
                  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                />
              </div>

              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="*****"
                  onChange={(val) => {
                    setInput({ ...input, password: val.target.value });
                  }}
                  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                />
              </div>

              <div className="mb-3">
                <button
                  type="button"
                  onClick={onClickLogin}
                  className="mb-1.5 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md"
                >
                  Login
                </button>
              </div>
            </div>
            <div className="mb-3 text-center">
              <a href="#" className="text-xs font-semibold text-purple-700">
                Forgot password?
              </a>
            </div>
            <div className="text-center">
              <span className="text-xs text-gray-400 font-semibold">
                Don't have account?
              </span>
              <a href="/join" className="text-xs font-semibold text-purple-700">
                Sign up
              </a>
            </div>
          </div>
        </div>

        <div
          className="flex flex-wrap content-center justify-center rounded-r-md"
          style={{ width: "24rem", height: "32rem" }}
        >
          <img
            className="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md"
            src="https://i.imgur.com/9l1A4OS.jpeg"
          />
        </div>
      </div>
    </div>
  );
};
