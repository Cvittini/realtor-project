import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.pathname);
  function pathMathRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <img
          src="https://static.rdc.moveaws.com/rdc-ui/logos/logo-brand.svg"
          alt="logo"
          className="h-5 cursor-pointer"
          onClick={()=>navigate("/")}
        />
        <div>
          <ul className="flex space-x-10">
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent
                ${pathMathRoute("/") && "tet-black border-b-red-500"}`}
                onClick={()=>navigate("/")}
            >
              Home
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent
                ${pathMathRoute("/offers") && "tet-black border-b-red-500"}`}
                onClick={()=>navigate("/offers")}
            >
              Offers
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent
                ${pathMathRoute("/sign-in") && "tet-black border-b-red-500"}`}
                onClick={()=>navigate("/sign-in")}
            >
              Sign in
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
