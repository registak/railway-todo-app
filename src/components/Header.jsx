import React from "react";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import  { signOut } from "../authSlice";
import "./header.css";

export const Header = () => {
  const auth = useSelector((state) => state.auth.isSignIn)
  const dispatch = useDispatch();
  const history = useHistory();
  const [cookies, setCookie, removeCookie] = useCookies();
  const handleSignOut = () => {
    dispatch(signOut());
    removeCookie("token");
    history.push("/signin");
  }

  return (
    <header className="header">
      <h1>Todoアプリ</h1>
      {auth ? <button onClick={handleSignOut} className="sign-out-button">サインアウト</button> : <></>}
    </header>
  )
}