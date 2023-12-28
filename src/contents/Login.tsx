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
          navigate("/home");
        } else {
          console.log(payload.data.message);
        }
      })
      .catch((e: any) => {
        console.log("연결 실패", e);
      });
  };

  return (
    <div className="m-3 center">
      <div className="input-group mb-3">
        <span className="input-group-text">@</span>
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="id"
            placeholder="ID"
            onChange={(val) => {
              setInput({ ...input, id: val.target.value });
            }}
          />
          <label htmlFor="id">ID</label>
        </div>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">@</span>
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="password"
            placeholder="password"
            onChange={(val) => {
              setInput({ ...input, password: val.target.value });
            }}
          />
          <label htmlFor="password">Password</label>
        </div>
      </div>

      <button
        type="button"
        className="btn btn-primary btn-lg"
        onClick={onClickLogin}
      >
        Login
      </button>
    </div>
  );
};
