export const isLoggedInOwner = () => {
    let data = sessionStorage.getItem("owner-id");
    if (data != null) return true;
    else return false;
  };
  export const isLoggedInUser = () => {
    let data = sessionStorage.getItem("id");
    if (data != null) return true;
    else return false;
  };
  export const isLoggedInHost = () => {
    let data = sessionStorage.getItem("host-id");
    if (data != null) return true;
    else return false;
  };