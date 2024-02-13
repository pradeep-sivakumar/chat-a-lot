import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";
import { useSocketContext } from "../../context/SocketContext";
import { RiMenu2Line } from "react-icons/ri";

const MessageContainer = ({isMobile}) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(selectedConversation?._id);

  useEffect(() => {
    // cleanup function (unmounts)
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="w-full md:w-3/5 flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected isMobile={isMobile}/>
      ) : (
        <>
          {/* Header */}
          <div className="bg-slate-600 px-4 py-4 mb-2 sm:ps-5 ps-16 sticky w-full z-10 sm:static flex items-center">
            {/* <span className='label-text'>To:</span>{" "} */}

			<div className={`avatar ${isOnline ? "online" : "offline"}`}>
					<div className='w-8 sm:w-10 rounded-full'>
						<img src={selectedConversation.profilePic} alt='user avatar' />
					</div>
			</div>

            {/* <div className="w-7 sm:w-10 rounded-full">
              <img src={selectedConversation.profilePic} alt="user avatar" />
            </div> */}


            <span className="text-white font-bold ps-3">
              {selectedConversation.fullName}
            </span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};
export default MessageContainer;

const NoChatSelected = ({isMobile}) => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {authUser.fullName} ❄</p>
        <p>Select a chat to start messaging</p>
		
        <TiMessages className="text-3xl md:text-6xl text-center" />

		{isMobile && <p className="flex items-center">Tap on a <span ><RiMenu2Line className='w-4 h-4 mx-1.5 outline-none'/></span> icon to select a chat</p>}
      </div>
    </div>
  );
};
