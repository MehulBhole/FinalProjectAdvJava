import { Navigate, Outlet } from "react-router-dom";
import { isLoggedInOwner } from "./Authentication";

export function PrivateRoute(){

  if(isLoggedInOwner()){
    return <Outlet></Outlet>
  }else{
    return <Navigate to="/login-owner"></Navigate>
  }
}