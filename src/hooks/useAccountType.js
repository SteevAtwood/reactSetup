import { useLocation } from "react-router-dom";

export const ADMIN = "admin";
export const USER = "user";

const useAccountType = () => {
  const location = useLocation();
  const isAdmin = location.pathname.includes(ADMIN);

  if (isAdmin) {
    return ADMIN;
  }
  return USER;
};

export default useAccountType;
