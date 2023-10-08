import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import { useContext } from "react";
import { mycontext } from "./components/Usercontext";
import Login from "./components/Login";

function App() {
  const { user } = useContext(mycontext);

  return user?.length !== 0 ? (
    <div className="flex h-full">
      <Sidebar />

      <div className="flex-1 flex flex-col md:!ml-[106px] overflow-hidden">
        <Navbar />
        <Main />
        <button className="md:hidden block fixed bottom-7 right-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            viewBox="0 0 45 45"
            fill="none"
            className="bg-white"
          >
            <path
              d="M20 35H25V25H35V20H25V10H20V20H10V25H20V35ZM5 45C3.625 45 2.4475 44.51 1.4675 43.53C0.487504 42.55 -0.00166242 41.3733 4.24448e-06 40V5C4.24448e-06 3.625 0.490004 2.4475 1.47 1.4675C2.45 0.487504 3.62667 -0.00166242 5 4.24448e-06H40C41.375 4.24448e-06 42.5525 0.490004 43.5325 1.47C44.5125 2.45 45.0017 3.62667 45 5V40C45 41.375 44.51 42.5525 43.53 43.5325C42.55 44.5125 41.3733 45.0017 40 45H5Z"
              fill="#5E3EBA"
            />
          </svg>
        </button>
      </div>
    </div>
  ) : (
    <Login />
  );
}

export default App;
