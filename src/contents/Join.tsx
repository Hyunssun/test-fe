import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const Join = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState<any>({
    id: "",
    password: "",
    name: "",
    number: "",
  });

  const onClickJoin = async () => {
    axios
      .post(`${process.env.REACT_APP_API_KEY}/user/create`, {
        userid: input.id,
        password: input.password,
        name: input.name,
        number: input.number,
      })
      .then((payload: any) => {
        if (payload.data.message === "success") {
          console.log(payload);
          navigate("/");
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
      <div className="max-w-[280px] mx-auto">
        <div className="flex flex-col items-center mt-[10vh]">
          <h2 className="mb-5 text-gray-900 font-mono font-bold text-xl">
            Sign Up
          </h2>

          <div>
            <input
              type="text"
              className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium "
              placeholder="ID"
              onChange={(val) => {
                setInput({ ...input, id: val.target.value });
              }}
            />
            <input
              type="password"
              className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium "
              placeholder="Password"
              onChange={(val) => {
                setInput({ ...input, password: val.target.value });
              }}
            />
            <input
              type="text"
              className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium "
              placeholder="Name"
              onChange={(val) => {
                setInput({ ...input, name: val.target.value });
              }}
            />
            <input
              type="text"
              className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium "
              placeholder="Phone number"
              onChange={(val) => {
                setInput({ ...input, number: val.target.value });
              }}
            />

            <button
              type="button"
              onClick={onClickJoin}
              className="bg-slate-500 hover:bg-slate-700 text-white text-base rounded-lg py-2.5 px-5 transition-colors w-full text-[19px]"
            >
              Sign Up
            </button>
          </div>
          <p className="text-center mt-3 text-[14px]">
            Already have an account?
            <a href="/" className="text-gray-600">
              Log In
            </a>
          </p>
          <p className="text-center mt-3 text-[14px]">
            By clicking continue, you agree to our
            <a href="/terms" className="text-gray-600">
              Terms of Service
            </a>
            and
            <a href="/privacy" className="text-gray-600">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};
