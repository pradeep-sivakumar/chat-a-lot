import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";
import { RiMenu3Line } from "react-icons/ri";

const Sidebar = ({ setIsSidebarOpen }) => {
  return (
    <div className="sm:border-r w-full md:w-2/5 h-full sm:border-slate-500 border-transparent flex flex-col">
	  <button className="sm:hidden p-4" onClick={() => setIsSidebarOpen(false)}>
          <RiMenu3Line className='w-6 h-6 outline-none'/>
        </button>
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations setIsSidebarOpen={setIsSidebarOpen}/>
      <LogoutButton />
    </div>
  );
};
export default Sidebar;
