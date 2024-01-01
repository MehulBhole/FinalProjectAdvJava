import { Navigate, Outlet } from "react-router-dom";
import { isLoggedInHost } from "./Authentication";

export function PrivateRouteHost(){

  if(isLoggedInHost()){
    return <Outlet></Outlet>
  }else{
    return <Navigate to="/login-host"></Navigate>
  }
}