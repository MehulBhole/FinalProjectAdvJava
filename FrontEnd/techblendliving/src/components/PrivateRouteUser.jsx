import { Navigate, Outlet } from "react-router-dom";
import { isLoggedInUser } from "./Authentication";

export function PrivateRouteUser(){

  if(isLoggedInUser()){
    return <Outlet></Outlet>
  }else{
    return <Navigate to="/login-user"></Navigate>
  }
}