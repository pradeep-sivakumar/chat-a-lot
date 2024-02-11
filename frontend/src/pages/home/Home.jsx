import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";
import { RiMenu2Line } from "react-icons/ri";
import React, { useState, useEffect } from "react";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
      !isMobile && setIsSidebarOpen(false);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    // md:h-[550px]sm:h-[450px]
    <div className="flex relative sm:w-3/4 w-full sm:h-3/4 h-full rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <button className="absolute sm:hidden p-4" onClick={toggleSidebar}>
          <RiMenu2Line className='w-6 h-6 outline-none'/>
        </button>
      {isMobile ? (
        <div
          //
          // className={`fixed sidebar-animation inset-y-0 left-0 z-50 bg-gray-800 text-white ${
          //   isSidebarOpen ? "block" : "hidden"
          // }`}
          className={`fixed inset-y-0 left--1 z-50 bg-gray-800 text-white transition-transform duration-300 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Sidebar setIsSidebarOpen={setIsSidebarOpen} />
        </div>
      ) : (
        <Sidebar />
      )}

      <MessageContainer />
    </div>
  );
};
export default Home;
