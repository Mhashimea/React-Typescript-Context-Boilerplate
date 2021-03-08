import * as React from "react";
import { useAppState } from "../store/auth";

export default function Navbar() {
  const auth = useAppState();
  return (
    <div className="w-full bg-blue-600 h-12 flex items-center justify-end px-20 text-white">
      <h1>{auth.currentUser.username}</h1>
    </div>
  );
}
