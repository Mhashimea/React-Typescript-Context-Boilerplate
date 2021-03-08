import * as React from "react";
import useInput from "../hooks/useInput";
import { useAuthenticate } from "../store/auth";
import "./style.css";

export default function Login() {
  const username = useInput("");
  const password = useInput("");
  const { login, loading } = useAuthenticate();

  return (
    <div className="flex items-center flex-col justify-center h-full">
      <h1 className="mb-5 font-semibold text-xl">Login to your account</h1>
      <div className="border flex flex-col p-4 w-80">
        <input
          type="text"
          className="border p-3 rounded mb-3"
          placeholder="username"
          {...username}
        />
        <input
          type="password"
          className="border p-3 rounded mb-3"
          placeholder="password"
          {...password}
        />
        <button
          className="bg-blue-600 p-3 rounded text-white"
          onClick={() =>
            login({ username: username.value, password: password.value })
          }
          disabled={loading}
        >
          Login
        </button>
      </div>
    </div>
  );
}
