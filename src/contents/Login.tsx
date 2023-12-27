import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const Login = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState<any>({
    id: "",
    password: "",
  });

  useEffect(() => {
    console.log("process.env.REACT_APP_API_KEY", process.env.REACT_APP_API_KEY);
  }, []);

  const onClickLogin = async () => {
    console.log(`input`, input);
    // navigate("/home");
    try {
      //응답 성공
      const response = await axios.get(
        `${process.env.REACT_APP_API_KEY}/user/all`
      );
      console.log(response);
    } catch (error) {
      //응답 실패
      console.error(error);
    }
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
