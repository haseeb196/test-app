import { Button } from "@mui/material";
import React, { useContext } from "react";
import myExportedObject from "../firebase";
import { mycontext } from "./Usercontext";
import { signInWithPopup } from "firebase/auth";
const Login = () => {
  const { setUser } = useContext(mycontext);
  const handleClick = async () => {
    const result = await signInWithPopup(
      myExportedObject.auth,
      myExportedObject.provider,
    );
    setUser(result.user);
  };
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Button
        className="!bg-green-500 !text-white flex-grow max-w-md"
        onClick={handleClick}
      >
        Login
      </Button>
    </div>
  );
};

export default Login;
